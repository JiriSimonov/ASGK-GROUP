import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { LocalStorageService } from '../storage/services/local-storage.service';
import { UserDataModel } from '../../shared/models/user-data.model';

@Injectable()
export class AsgkInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userData: UserDataModel | null = this.localStorageService.getItem('auth');
    const apiToken = userData ? userData.token : '';
    const URL = `${environment.API_PATH}${apiToken}${request.url}`;
    const updatedRequest = userData
      ? request.clone({
          setHeaders: { Authorization: `${apiToken}` },
          url: URL,
        })
      : request;
    return next.handle(updatedRequest);
  }
}
