import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ClientsService } from '../../services/clients.service';
import { ClientsModalComponent } from '../clients-modal/clients-modal.component';

@Component({
  selector: 'asgk-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss'],
})
export class ClientsTableComponent implements OnInit, OnDestroy {
  public dataSource = this.clientsService.clients$;
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
    'loyalty_level',
    'o_s',
    'template',
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
}
