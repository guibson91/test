import { AuthService } from 'src/app/services/auth.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { SharedService } from 'src/app/services/shared.service';
import { SuperPage } from 'src/app/util/super';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends SuperPage implements OnInit {
  email: string;
  password: string;
  visiblePassword = false;
  now = new Date();
  constructor(
    public shared: SharedService,
    public ref: ChangeDetectorRef,
    public linkService: LinkService,
    public authService: AuthService
  ) {
    super(shared, authService);
  }

  ngOnInit() {}

  toggleVisibility() {
    this.visiblePassword = !this.visiblePassword;
  }
}
