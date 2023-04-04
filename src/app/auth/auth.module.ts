import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthPageComponent } from './page/auth-page/auth-page.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
  },
];

@NgModule({
  declarations: [AuthPageComponent, SignInFormComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
