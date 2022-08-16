import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { removeSymbol } from 'src/app/util/util';

/**
 * Formulário de endereço definido no control 'address' de um form qualquer
 */
@Component({
  selector: 'app-nano-address',
  templateUrl: './nano-address.component.html',
  styleUrls: ['./nano-address.component.scss'],
})
export class NanoAddressComponent implements OnInit {
  @Input() form: FormGroup;
  errorCep = false;

  constructor(public shared: SharedService) {}

  ngOnInit() {
    this.form.addControl(
      'address',
      new FormGroup({
        cep: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
        ]),
        street: new FormControl('', Validators.required),
        complement: new FormControl(''),
        district: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        streetNumber: new FormControl(''),
      })
    );
  }

  handleCepChange(e) {
    let cep: string = e.target.value;
    cep = removeSymbol(cep);
    console.log('CEP: ', cep);
    if (cep.length === 8) {
      this.shared.getAddressByCep(cep).subscribe((res) => {
        if (res) {
          this.errorCep = false;
          this.form.patchValue({
            address: res,
          });
        } else {
          this.errorCep = true;
          this.form.patchValue({
            address: {
              city: '',
              state: '',
              street: '',
            },
          });
        }
      });
    } else {
      this.form.patchValue({
        address: {
          city: '',
          state: '',
          street: '',
        },
      });
    }
  }
}
