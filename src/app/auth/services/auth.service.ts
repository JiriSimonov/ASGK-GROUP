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
  private userData$$ = new BehaviorSubject<UserDataModel | null>(this.localStorageService.getItem('auth'));
  public userData$ = this.userData$$.asObservable();

  constructor(
    private authHttpService: AuthHttpService,
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  public login(user: UserDataModel): Observable<AuthTokenModel> {
    return this.authHttpService.signIn(user).pipe(
      tap(({ auth_token }) => {
        const userData = {
          login: user.login,
          token: auth_token,
        };
        this.userData$$.next(userData);
        this.localStorageService.setItem('auth', userData);
        this.router.navigate(['clients']).catch();
      }),
    );
  }

  public logout(): void {
    this.localStorageService.removeItem('auth');
    this.userData$$.next(null);
    this.router.navigate(['auth']).catch();
  }
}
