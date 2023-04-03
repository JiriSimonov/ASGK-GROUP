import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './page/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
  },
];

@NgModule({
  declarations: [AuthPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
