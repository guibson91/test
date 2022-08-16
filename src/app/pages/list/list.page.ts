import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/models/pokemonResponse';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { SuperPage } from 'src/app/util/super';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage extends SuperPage implements OnInit {
  currentResponse: PokemonResponse;
  loading = false;

  constructor(public shared: SharedService, public authService: AuthService) {
    super(shared, authService);
  }

  ngOnInit() {
    this.loadServerPokemons();
  }

  loadServerPokemons(url?) {
    this.loading = true;
    this.shared.getServerPokemons(url).subscribe(
      (res) => {
        console.log('Res server pokemons: ', res);
        this.currentResponse = res;
        this.loading = false;
      },
      (error) => {
        console.error('Error: ', error);
        this.loading = false;
        this.shared.system.showErrorAlert(error);
      }
    );
  }

  changeList() {
    this.goBack();
  }

  next() {
    //just in case
    if (!this.currentResponse.next) {
      return this.shared.system.showAlert(
        'Última página',
        'Você já está na última página'
      );
    } else {
      this.loadServerPokemons(this.currentResponse.next);
    }
  }

  previous() {
    //just in case
    if (!this.currentResponse.previous) {
      return this.shared.system.showAlert(
        'Página inicial',
        'Você está na primeira página'
      );
    } else {
      this.loadServerPokemons(this.currentResponse.previous);
    }
  }
}
