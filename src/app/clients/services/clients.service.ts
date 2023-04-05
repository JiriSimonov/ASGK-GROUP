import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, tap } from 'rxjs';
import { Sort } from '@angular/material/sort';
import { ClientsHttpService } from './clients-http.service';
import { ClientInfoModel } from '../models/client-info.model';
import { ClientsResponseModel } from '../models/clients-response.model';
import { PushMessageModel } from '../models/push-message.model';
import { PushMessageResponseModels } from '../models/push-message-response.models';
import { SearchValueModel } from '../models/search-value.model';
import { defaultStringSorter } from '../constants/default-string-sorter.const';
import { sortMap } from '../constants/sort-map.const';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private sort$$ = new BehaviorSubject<Sort | null>(null);
  public sort$ = this.sort$$.asObservable();
  private clients$$ = new BehaviorSubject<ClientInfoModel[]>([]);
  public clients$ = combineLatest([this.clients$$.asObservable(), this.sort$]).pipe(
    map(([clients, sort]) =>
      sort
        ? [...clients].sort(
            (a, b) =>
              (sortMap[sort.active]
                ? sortMap[sort.active](a, b)
                : defaultStringSorter(
                    a[sort.active as keyof ClientInfoModel].toString(),
                    b[sort.active as keyof ClientInfoModel].toString(),
                  )) * (sort.direction === 'asc' ? 1 : -1),
          )
        : clients,
    ),
  );

  constructor(private clientsHttpService: ClientsHttpService) {}

  public getClients(): Observable<ClientsResponseModel> {
    return this.clientsHttpService
      .getClients()
      .pipe(tap((clientsResponse) => this.clients$$.next(clientsResponse.passes)));
  }

  public searchClient(client: SearchValueModel): Observable<ClientsResponseModel> {
    return this.clientsHttpService
      .searchClient(client)
      .pipe(tap((clientsResponse) => this.clients$$.next(clientsResponse.passes)));
  }

  public sendMessage(message: PushMessageModel): Observable<PushMessageResponseModels> {
    return this.clientsHttpService.sendMessage(message);
  }

  public sortClients(sortCriteria: Sort): void {
    this.sort$$.next(sortCriteria);
  }
}
