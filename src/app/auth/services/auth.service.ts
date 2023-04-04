import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { UserDataModel } from '../../shared/models/user-data.model';
import { LocalStorageService } from '../../core/storage/services/local-storage.service';
import { AuthHttpService } from './auth-http.service';
import { AuthTokenModel } from '../../shared/models/auth-token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userData = new BehaviorSubject<UserDataModel | null>(null);

  constructor(
    private authHttpService: AuthHttpService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  public login(user: UserDataModel): Observable<AuthTokenModel> {
    return this.authHttpService.signIn(user).pipe(
      tap((token) => {
        this.userData.next({ login: user.login, password: user.password, token: token.auth_token });
        this.localStorageService.setItem('auth', token.auth_token);
        this.router.navigate(['clients']).catch();
      }),
    );
  }
}
