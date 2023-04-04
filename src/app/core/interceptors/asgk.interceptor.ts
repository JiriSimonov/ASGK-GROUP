import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';
import { LocalStorageService } from '../storage/services/local-storage.service';

@Injectable()
export class AsgkInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const URL = `${environment.API_PATH}${request.url}`;
    const newRequest = request.clone({
      url: URL,
    });
    const updatedRequest = this.localStorageService.getItem('auth') ? newRequest : request;
    return next.handle(updatedRequest);
  }
}
