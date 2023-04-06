import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

const MODULES = [
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatSortModule,
  MatMenuModule,
  MatIconModule,
];

@NgModule({
  imports: [CommonModule],
  exports: [...MODULES],
})
export class MaterialModule {}
