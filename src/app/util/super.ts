import { AuthService } from 'src/app/services/auth.service';
import { first } from 'rxjs/operators';
import { Optional } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { User } from 'src/app/models/user';

export class SuperPage {
  user: User;
  constructor(
    public shared: SharedService,
    @Optional() public authService?: AuthService
  ) {}

  protected goBack() {
    this.shared.ngZone.run(() => {
      this.shared.navCtrl.back();
    });
  }

  protected pushPage(page) {
    this.shared.ngZone.run(() => {
      this.shared.navCtrl.navigateForward(page);
    });
  }

  protected rootPage(page?) {
    page = page ? page : 'home';
    this.shared.ngZone.run(() => {
      this.shared.navCtrl.navigateRoot(page);
    });
  }

  protected async login(email, password) {
    if (!email) {
      return this.shared.system.showAlert(
        'E-mail obrigatório',
        'Você deve preencher o e-mail para logar'
      );
    }
    if (!password) {
      return this.shared.system.showAlert(
        'Senha obrigatória',
        'Você deve preencher a senha para logar'
      );
    }
    const loading = await this.shared.loadingCtrl.create({
      message: 'Autenticando usuário',
    });
    loading.present();
    this.authService
      .login(email.trim(), password.trim())
      .pipe(first())
      .subscribe(
        (userAuth) => {
          User.object(userAuth.user.uid).subscribe(
            (res) => {
              loading.dismiss();
              this.shared.user$.next(res);
              this.pushPage('home');
            },
            (error) => {
              loading.dismiss();
              this.shared.system.showErrorAlert(error);
            }
          );
        },
        (error) => {
          loading.dismiss();
          error = this.shared.system.getAuthenticationError(error);
          this.shared.system.showErrorAlert(error);
        }
      );
  }

  protected async logout() {
    if (!this.authService) {
      throw TypeError('AuthService instance is required');
    }
    const alert = await this.shared.alertCtrl.create({
      header: 'Sair',
      message: 'Você tem certeza que deseja sair?',
      buttons: [
        {
          text: 'Não',
          cssClass: 'user',
        },
        {
          text: 'Sim',
          cssClass: 'user',
          handler: () => {
            this.authService.logout();
          },
        },
      ],
    });
    alert.present();
  }

  protected async openForgotPassword(email?: string) {
    if (!this.authService) {
      throw TypeError('AuthService instance is required');
    }
    const alert = await this.shared.alertCtrl.create({
      header: 'Alterar senha',
      message: 'Qual o e-mail que você deseja alterar a senha?',
      inputs: [
        {
          placeholder: 'Digite seu email',
          type: 'email',
          value: email ? email : '',
          name: 'email',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Enviar',
          handler: (data) => {
            if (!data || !data.email) {
              return this.shared.system.showAlert(
                'Email obrigatório',
                'Por favor digite o e-mail para recuperação de senha'
              );
            }
            email = data.email.toLocaleLowerCase().trim();
            this.authService.sendEmailForChangePassword(data.email, true);
          },
        },
      ],
    });
    alert.present();
  }
}
