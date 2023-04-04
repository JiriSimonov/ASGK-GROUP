import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDataModel } from '../../shared/models/user-data.model';
import { AuthTokenModel } from '../../shared/models/auth-token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private http: HttpClient) {}

  public signIn(user: UserDataModel): Observable<AuthTokenModel> {
    return this.http.post<AuthTokenModel>('test-auth-only', user);
  }
}
