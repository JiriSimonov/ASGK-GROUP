import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientsResponseModel } from '../models/clients-response.model';
import { SearchValueModel } from '../models/search-value.model';
import { PushMessageModel } from '../models/push-message.model';
import { PushMessageResponseModels } from '../models/push-message-response.models';

const requestPath = '/passes';

@Injectable({
  providedIn: 'root',
})
export class ClientsHttpService {
  constructor(private http: HttpClient) {}

  public getClients(): Observable<ClientsResponseModel> {
    return this.http.get<ClientsResponseModel>(requestPath);
  }

  public searchClient(client: SearchValueModel): Observable<ClientsResponseModel> {
    return this.http.get<ClientsResponseModel>(requestPath, {
      params: {
        search: Object.entries(client)
          .map(([firstName, lastName]) => `${firstName}=${lastName}`)
          .join(','),
      },
    });
  }

  public sendMessage(message: PushMessageModel): Observable<PushMessageResponseModels> {
    return this.http.post<PushMessageResponseModels>('/message/push', message);
  }
}
