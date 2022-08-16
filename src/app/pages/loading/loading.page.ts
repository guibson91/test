import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { SuperPage } from 'src/app/util/super';

/**
 * Página inicial do sistema que controla o fluxo
 * AuthService dispara o user de acordo com o listenUser();
 * Se listenUser() conseguir recuperar o usuário, é direcionado para 'home'
 * Se listenUser() não conseguir recuperar usuário, é direcionado para 'login'
 */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage extends SuperPage implements OnInit {
  constructor(public shared: SharedService, public authService: AuthService) {
    super(shared, authService);
  }

  ngOnInit() {
    this.shared.user$.pipe(first()).subscribe((user) => {
      if (user) {
        this.rootPage();
      } else {
        this.rootPage('login');
      }
    });
  }
}
