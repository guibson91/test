import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

/**
 * Componente responsável por controlar ações do FORM
 * Salvar, atualizar, cancelar, adicionar ou excluir
 */
@Component({
  selector: 'app-nano-buttons',
  templateUrl: './nano-buttons.component.html',
  styleUrls: ['./nano-buttons.component.scss'],
})
export class NanoButtonsComponent {
  @Input() formGroup: FormGroup;
  @Input() canRemove = true;
  @Output() save = new EventEmitter();
  @Output() back = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor(public shared: SharedService) {}

  clickSave() {
    this.save.emit(null);
  }

  clickBack() {
    this.shared.navCtrl.back();
  }

  async clickRemove() {
    const alert = await this.shared.alertCtrl.create({
      header: 'Remover',
      message:
        'Você tem certeza que deseja remover esse registro no banco de dados?',
      buttons: [
        {
          text: 'Nao',
        },
        {
          text: 'Sim',
          handler: () => {
            this.remove.emit(null);
          },
        },
      ],
    });
    alert.present();
  }
}
