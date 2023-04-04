import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule];

@NgModule({
  imports: [CommonModule],
  exports: [...MODULES],
})
export class MaterialModule {}
