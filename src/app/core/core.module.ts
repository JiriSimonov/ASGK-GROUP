import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StorageModule } from './storage/storage.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule, StorageModule.forRoot({ config: { prefix: 'ASGK' } }), RouterLink],
  exports: [HeaderComponent],
})
export class CoreModule {}
