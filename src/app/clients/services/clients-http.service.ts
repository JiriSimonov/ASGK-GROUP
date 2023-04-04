import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ClientsResponseModel } from '../models/clients-response.model';
import { SearchValueModel } from '../models/search-value.model';

const requestPath = '/pases';

@Injectable({
  providedIn: 'root',
})
export class ClientsHttpService {
  constructor(private http: HttpClient) {}

  public getClients(): Observable<ClientsResponseModel> {
    return this.http
      .get<ClientsResponseModel>(requestPath, {
        params: {
          limit: '10',
          offset: 0,
        },
      })
      .pipe(tap(console.log));
  }

  public searchClient(client: SearchValueModel): Observable<ClientsResponseModel> {
    return this.http.get<ClientsResponseModel>(requestPath, {
      params: {
        limit: '10',
        offset: '0',
        search: Object.entries(client)
          .map(([firstName, lastName]) => `${firstName}=${lastName}`)
          .join(','),
      },
    });
  }
}
