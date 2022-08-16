import Axios, { AxiosObservable } from 'axios-observable';
import { addressDTO, AddressType, CorreiosResponse } from '../models/util';
import { environment } from 'src/environments/environment';
import { Injectable, NgZone } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SystemService } from './system.service';
import { User } from '../models/user';
import {
  AlertController,
  LoadingController,
  MenuController,
  ModalController,
  NavController,
  Platform,
} from '@ionic/angular';

/**
 * Variáveis e métodos globais do sistema
 * Responsável por armazenar tudo de acesso compartilhado
 *
 * @example o usuário e o ReplaySubject que o controla é definido aqui
 */
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  api: any;

  user: User; //auth user
  userSubscription: Subscription;
  user$: ReplaySubject<User> = new ReplaySubject<User>(1); //auth user observer

  constructor(
    public system: SystemService,
    public platform: Platform,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public router: Router,
    public ngZone: NgZone,
    public modalCtrl: ModalController
  ) {
    this.listenUser();
    this.initAPI();
  }

  initAPI() {
    this.api = environment.production
      ? 'https://us-central1-weho-production.cloudfunctions.net/'
      : 'https://us-central1-weho-production.cloudfunctions.net/';
  }

  /**
   * Atualizar usuário do sistema toda vez que ele alterar
   */
  listenUser() {
    this.userSubscription = this.user$.subscribe((u) => {
      console.log('Usuário ESCUTA: ', u);
      this.user = u;
      if (!this.user) {
        return this.handleLogoutUser();
      }
    });
  }

  handleLogoutUser() {
    this.userSubscription.unsubscribe();
  }

  getAddressByCep(cep): Observable<AddressType> {
    return Axios.get<AxiosObservable<CorreiosResponse>>(
      `https://viacep.com.br/ws/${cep}/json`
    ).pipe(
      map((res) => {
        if ((res.data as CorreiosResponse).erro === 'true') {
          return null;
        } else {
          return addressDTO(res.data as CorreiosResponse) as AddressType;
        }
      })
    );
  }
}
