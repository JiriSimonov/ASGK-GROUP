import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientsPageComponent } from './pages/clients-page/clients-page.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsPageComponent,
  },
];

@NgModule({
  declarations: [ClientsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ClientsModule {}
