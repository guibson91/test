import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

/**
 * Exibir errors, alertas, toasts e outros componentes corriqueiros do sistema.
 */
@Injectable({
  providedIn: 'root',
})
export class SystemService {
  constructor(
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {}

  public async showToast(message: string, duration?: number) {
    const toast = await this.toastCtrl.create({
      message,
      duration: duration ? duration : 3000,
    });
    await toast.present();
  }

  async showAlert(header, message, btnText?) {
    (
      await this.alertCtrl.create({
        header,
        message,
        buttons: [
          {
            text: btnText ? btnText : 'OK',
          },
        ],
      })
    ).present();
  }

  /**
   * Exibir alerta de erro
   */
  public async showErrorAlert(error) {
    console.error('Ocorreu um erro: ', error);
    let title;
    let message;

    //Definição do título do erro
    if (error && error.title) {
      title = error.title;
    } else {
      title = 'Ops!';
    }

    //Definição da mensagem do erro
    if (error && error.message) {
      message = error.message;
    } else if (error && error.error && error.error.message) {
      message = error.error.message;
    } else if (error && error.data && error.data.message) {
      message = error.data.message;
    } else {
      message =
        'Algo de errado aconteceu! Se o erro persistir, entre em contato com a equipe de suporte.';
    }

    const alert = await this.alertCtrl.create({
      header: title,
      subHeader: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  /**
   * Obter title e message de erro apropriada para código de erro do Authentication do Firebase.
   */
  getAuthenticationError(err) {
    const error = {
      title: 'Algo de errado aconteceu',
      message: `Se esse erro persistir, por favor contate a equipe de suporte`,
    };
    switch (err.code) {
      case 'auth/account-exists-with-different-credential':
        error.title = 'Conta já existe';
        error.message =
          'Uma conta já existe com o mesmo endereço de e-mail, mas credenciais de login diferentes. ' +
          'Faça login usando um provedor associado a este endereço de e-mail.';
        break;
      case 'auth/invalid-credential':
        break;
      case 'auth/invalid-email':
        error.title = 'E-mail inválido';
        error.message = 'Verifique se o e-mail está correto e tente novamente.';
        break;
      case 'auth/email-already-in-use':
        error.title = 'E-mail já cadastrado';
        error.message =
          'Por favor, escolha outro e-mail ou clique em "Esqueci Minha Senha" na página de login para recuperar sua conta.';
        break;
      case 'auth/too-many-requests':
        error.title = 'Solicitação já enviada';
        error.message =
          'Você já solicitou e-mail de verificação recente. Por favor, verifique sua caixa de entrada, SPAM e lixeira.';
        break;
      case 'auth/operation-not-allowed':
        error.title = 'Solicitação não permitida';
        error.message =
          'Você não tem autorização para executar essa operação. Contate a administração de suporte.';
        break;
      case 'auth/user-disabled':
        error.title = 'Esse usuário foi desativado';
        error.message = 'Entre em contato com o suporte para mais informações.';
        break;
      case 'auth/user-not-found':
        error.title = 'E-mail não cadastrado';
        error.message = 'Verifique se o e-mail está correto e tente novamente.';
        break;
      case 'auth/wrong-password':
        error.title = 'Senha inválida';
        error.message =
          'Verifique se sua senha está correta e tente novamente.';
        break;
      case 'aauth/invalid-verification-code':
        error.title = 'Código inválido';
        error.message =
          'Verifique se seu código está correto e tente novamente.';
        break;
      case 'auth/invalid-verification-id':
        break;
      default:
        break;
    }
    return error;
  }
}
