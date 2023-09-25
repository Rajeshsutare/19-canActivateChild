import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSnackBarModule} from '@angular/material/snack-bar';

const maretialArray=[
  MatSnackBarModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...maretialArray], 
  exports:[...maretialArray]
})
export class MaterialsModule { }
