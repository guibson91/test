import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserCredential } from 'firebase/auth';
import { Observable, of } from 'rxjs';
import { NanoCollection } from 'src/app/models/collection';
import { improveAddress } from 'src/app/models/util';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

/**
 * Componente responsável por criar um CRUD completo no Firestore bastando passar um FORM
 */
@Component({
  selector: 'app-nano-form',
  templateUrl: './nano-form.component.html',
  styleUrls: ['./nano-form.component.scss'],
})
export class NanoFormComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() path: string;
  @Input() allowButtons = true;

  constructor(public shared: SharedService, public authService: AuthService) {}

  ngOnInit() {}

  /**
   * Validações e tratamentos gerais
   */
  prepareDatabaseObject(): any {
    const form = this.formGroup.value;
    //Help address content
    if (form.address) {
      form.address = improveAddress(form.address);
    }
    return form;
  }

  async save() {
    console.log('save', this.formGroup.value);
    const entity = this.getEntity();
    const obj: any = this.prepareDatabaseObject();
    if (!obj || !entity) {
      return;
    }

    const loading = await this.shared.loadingCtrl.create({});
    loading.present();
    //Atualizar
    if (this.formGroup.value.id) {
      console.log('Atualizar');
      entity.update(obj.id, obj).subscribe(
        () => {
          loading.dismiss();
          console.log('Entidade atualizada com sucesso');
          this.handleSuccess('update');
        },
        (error) => {
          loading.dismiss();
          console.error('Error update entity: ', error);
          this.shared.system.showErrorAlert(error);
        }
      );
    }
    //Salvar
    else {
      delete obj.id;
      console.log('Salvar');
      const auth$: Observable<any> =
        obj.email && obj.password
          ? this.authService.register(obj.email, obj.password)
          : of(null);

      auth$.subscribe(
        (userCredential: UserCredential | null) => {
          delete obj.password;
          if (userCredential) {
            entity.set(userCredential.user.uid, obj).subscribe(
              () => {
                loading.dismiss();
                console.log('Usuário criado com autenticação com sucesso');
                this.handleSuccess('create');
              },
              (error) => {
                loading.dismiss();
                console.error('Error ao cadastrar usuário: ', error);
                this.shared.system.showErrorAlert(error);
              }
            );
          } else {
            entity.add(obj).subscribe(
              () => {
                loading.dismiss();
                console.log('Entidade atualizada com sucesso');
                this.handleSuccess('create');
              },
              (error) => {
                loading.dismiss();
                console.error('Error update entity: ', error);
                this.shared.system.showErrorAlert(error);
              }
            );
          }
        },
        (error) => {
          loading.dismiss();
          console.error('Error: ', error);
          error = this.shared.system.getAuthenticationError(error);
          this.shared.system.showErrorAlert(error);
        }
      );
    }
  }

  remove() {
    console.log('remove');
    if (this.formGroup.value.id) {
      const entity = this.getEntity();
      entity.remove(this.formGroup.value.id).subscribe(() => {
        console.log('removido com sucesso');
        this.handleSuccess('delete');
      });
    } else {
      console.error('Obrigatório ID para remover');
    }
  }

  private handleSuccess(type: 'create' | 'update' | 'delete' = 'create') {
    this.shared.system.showToast(
      `Registro ${
        type === 'create'
          ? 'criado'
          : type === 'update'
          ? 'atualizado'
          : 'removido'
      } com sucesso`,
      2500
    );
    this.formGroup.reset();
    this.shared.navCtrl.back();
  }

  private getEntity() {
    if (!this.path) {
      console.error('Obrigatório instanciar o path');
      return null;
    }
    class Entity extends NanoCollection {
      static path;
      id?: string;
    }
    Entity.path = this.path;
    return Entity;
  }
}
