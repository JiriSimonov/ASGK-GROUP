import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'asgk-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss'],
})
export class ClientsTableComponent implements OnInit {
  public dataSource = this.clientsService.clients$;
  public displayedColumns: string[] = [
    'barcode',
    'birthday',
    'bonus',
    'created_at',
    'discount',
    'email',
    'first_name',
    'gender',
    'last_name',
    'link',
    'loyalty_level',
    'o_s',
    'pat_name',
    'phone',
    'template',
  ];

  constructor(private clientsService: ClientsService) {}

  public ngOnInit(): void {
    this.clientsService.getClients().subscribe();
  }
}
