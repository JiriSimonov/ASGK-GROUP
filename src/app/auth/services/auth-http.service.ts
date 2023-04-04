import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDataModel } from '../../shared/models/user-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private http: HttpClient) {}

  public signIn(user: UserDataModel): Observable<string> {
    return this.http.post<string>('test-auth-only', user);
  }
}
