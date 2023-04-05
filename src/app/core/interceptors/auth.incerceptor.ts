import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../storage/services/local-storage.service';
import { environment } from '../../../environment/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const URL = `${environment.AUTH_PATH}${request.url}`;
    const updatedRequest = this.localStorageService.getItem('auth')
      ? request
      : request.clone({
          url: URL,
        });
    return next.handle(updatedRequest);
  }
}
