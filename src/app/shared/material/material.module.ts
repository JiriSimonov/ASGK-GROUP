import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

const MODULES = [MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, MatTableModule];

@NgModule({
  imports: [CommonModule],
  exports: [...MODULES],
})
export class MaterialModule {}
