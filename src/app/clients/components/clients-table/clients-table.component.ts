import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Sort } from '@angular/material/sort';
import { ClientsService } from '../../services/clients.service';
import { ClientsModalComponent } from '../clients-modal/clients-modal.component';

@Component({
  selector: 'asgk-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsTableComponent implements OnInit, OnDestroy {
  public clients$ = this.clientsService.clients$;
  public displayedColumns: string[] = [
    'last_name',
    'first_name',
    'pat_name',
    'gender',
    'birthday',
    'email',
    'phone',
    'barcode',
    'user_id',
    'bonus',
    'created_at',
    'discount',
    'link',
  ];
  private subs = new Subscription();

  constructor(private clientsService: ClientsService, private createDialog: MatDialog) {}

  public ngOnInit(): void {
    this.subs.add(this.clientsService.getClients().subscribe());
  }

  public openMessageDialog(): void {
    this.createDialog.open(ClientsModalComponent, {
      width: '400px',
    });
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public sortClients(sortCriteria: Sort): void {
    this.clientsService.sortClients(sortCriteria);
  }
}
