import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClientsHttpService } from '../services/clients-http.service';

export const isClientIdExist =
  (clientsHttpService: ClientsHttpService) =>
  (control: AbstractControl): Observable<{ isClientNotExits: boolean } | null> =>
    control.valueChanges.pipe(
      debounceTime(1000),
      switchMap(() =>
        clientsHttpService
          .getClientById(control.value)
          .pipe(map((result) => (result ? null : { isClientNotExits: true }))),
      ),
      first(),
    );
