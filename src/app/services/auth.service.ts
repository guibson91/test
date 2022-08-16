import { from, Observable, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { User } from '../models/user';
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = getAuth();

  token = null;

  obsAuth$: Subscription;
  constructor(public shared: SharedService) {
    console.log('auth service');
    this.listenUser();
  }

  login(email: string, password: string): Observable<UserCredential> {
    try {
      return from(signInWithEmailAndPassword(this.auth, email, password));
    } catch (error) {
      throw error;
    }
  }

  register(email: string, password: string) {
    try {
      return from(createUserWithEmailAndPassword(this.auth, email, password));
    } catch (error) {
      throw error;
    }
  }

  logout() {
    this.auth.signOut().then(() => {
      if (this.obsAuth$) {
        this.obsAuth$.unsubscribe();
      }
      this.shared.navCtrl.navigateRoot('login');
    });
  }

  sendEmailForChangePassword(email: string, showFeedback = true) {
    if (!email || email === '') {
      return;
    }
    this.recoveryPassword(email).subscribe(
      () => {
        console.log('Email de alteração de senha enviado com sucesso');
        if (showFeedback) {
          this.shared.system.showAlert(
            'E-mail enviado',
            'Por favor, verifique na sua caixa de entrada ou SPAM  ' +
              'o e-mail de recuperação de senha'
          );
        }
      },
      (error) => {
        console.error('Algo de errado aconteceu: ', error);
        error = this.shared.system.getAuthenticationError(error);
        this.shared.system.showErrorAlert(error);
      }
    );
  }

  private recoveryPassword(email: string) {
    return new Observable((observer) => {
      sendPasswordResetEmail(this.auth, email)
        .then(() => {
          observer.next('success');
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }

  private listenUser() {
    onAuthStateChanged(this.auth, (firebaseUser) => {
      if (firebaseUser && firebaseUser.uid) {
        if (this.obsAuth$) {
          this.obsAuth$.unsubscribe();
        }
        this.obsAuth$ = User.objectSync<User>(firebaseUser.uid).subscribe(
          (user) => {
            if (!user) {
              this.logout();
              return;
            }
            this.shared.user = user;
            this.shared.user$.next(user);
          }
        );
      } else {
        this.shared.user$.next(null);
      }
    });
  }
}
