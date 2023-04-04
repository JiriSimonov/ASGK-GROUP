import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsModalComponent } from './components/clients-modal/clients-modal.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsPageComponent,
  },
];

@NgModule({
  declarations: [ClientsPageComponent, ClientsTableComponent, ClientsModalComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ClientsModule {}
