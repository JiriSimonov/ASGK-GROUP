import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AsgkInterceptor } from '../../core/interceptors/asgk.interceptor';
import { AuthInterceptor } from '../../core/interceptors/auth.incerceptor';

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AsgkInterceptor, multi: true },
];
