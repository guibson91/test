import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/models/pokemonResponse';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { SuperPage } from 'src/app/util/super';
import { paginate } from 'src/app/util/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends SuperPage implements OnInit {
  currentResponse: PokemonResponse;
  pages: any[];
  currentPageIndex = 0;

  constructor(public shared: SharedService, public authService: AuthService) {
    super(shared, authService);
  }

  ngOnInit(): void {
    this.loadLocalPokemons();
  }

  loadLocalPokemons() {
    this.currentResponse = this.shared.getLocalPokemons();
    console.log('Response: ', this.currentResponse);
    this.pages = paginate(this.currentResponse.results, 25);
  }

  async changeList() {
    this.pushPage('list');
  }

  next() {
    //just in case
    if (this.currentPageIndex === this.pages.length - 1) {
      return this.shared.system.showAlert(
        'Última página',
        'Você já está na última página'
      );
    }
    this.currentPageIndex++;
  }

  previous() {
    //just in case
    if (this.currentPageIndex === 0) {
      return this.shared.system.showAlert(
        'Página inicial',
        'Você está na primeira página'
      );
    }
    this.currentPageIndex--;
  }
}
