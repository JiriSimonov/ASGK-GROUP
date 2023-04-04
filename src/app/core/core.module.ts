import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StorageModule } from './storage/storage.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, StorageModule.forRoot({ config: { prefix: 'ASGK' } })],
})
export class CoreModule {}
