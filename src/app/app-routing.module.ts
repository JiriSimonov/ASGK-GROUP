import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userGuard } from './core/guards/user.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'clients',
  },
  {
    path: 'clients',
    loadChildren: () => import('./clients/clients.module').then((m) => m.ClientsModule),
    canMatch: [userGuard('user')],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canMatch: [userGuard('guest')],
  },
  {
    path: '**',
    redirectTo: '404',
  },
  {
    path: '404',
    loadChildren: () => import('./core/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
