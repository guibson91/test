import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/models/user';
import { validateCpfCnpj } from 'src/app/util/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  path: string = User.path;
  errorEmail = false;
  errorCpfCnpj = false;

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      cpfCnpj: new FormControl('', [Validators.required, validateCpfCnpj]),
      type: new FormControl('client', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
}
