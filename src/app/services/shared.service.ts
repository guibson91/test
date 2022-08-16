import Axios, { AxiosObservable } from 'axios-observable';
import data from '../../data/pokemons.json';
import { addressDTO, AddressType, CorreiosResponse } from '../models/util';
import { Injectable, NgZone } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { PokemonResponse } from '../models/pokemonResponse';
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
 *
 * @example o usuário e o ReplaySubject que o controla é definido aqui
 */
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  user: User; //auth user
  userSubscription: Subscription;
  user$: ReplaySubject<User> = new ReplaySubject<User>(1); //auth user observer

  constructor(
    public system: SystemService,
    public platform: Platform,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public ngZone: NgZone,
    public modalCtrl: ModalController
  ) {
    this.listenUser();
  }

  /**
   * Atualizar usuário do sistema toda vez que ele alterar
   */
  listenUser() {
    this.userSubscription = this.user$.subscribe((user) => {
      console.log('Usuário atualizado: ', user);
      this.user = user;
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

  getLocalPokemons(): PokemonResponse {
    return data;
  }

  getServerPokemons(targetUrl?) {
    targetUrl = targetUrl
      ? targetUrl
      : ' https://pokeapi.co/api/v2/pokemon/?limit=25';
    return Axios.get<PokemonResponse>(targetUrl).pipe(map((res) => res.data));
  }

  soma(a, b) {
    return a + b;
  }
}
