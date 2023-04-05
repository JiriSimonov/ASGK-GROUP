import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ClientsHttpService } from './clients-http.service';
import { ClientInfoModel } from '../models/client-info.model';
import { ClientsResponseModel } from '../models/clients-response.model';
import { PushMessageModel } from '../models/push-message.model';
import { PushMessageResponseModels } from '../models/push-message-response.models';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private clients$$ = new BehaviorSubject<ClientInfoModel[]>([]);
  public clients$ = this.clients$$.asObservable();
  constructor(private clientsHttpService: ClientsHttpService) {}

  public getClients(): Observable<ClientsResponseModel> {
    return this.clientsHttpService
      .getClients()
      .pipe(tap((clientsResponse) => this.clients$$.next(clientsResponse.passes)));
  }

  public sendMessage(message: PushMessageModel): Observable<PushMessageResponseModels> {
    return this.clientsHttpService.sendMessage(message);
  }
}
