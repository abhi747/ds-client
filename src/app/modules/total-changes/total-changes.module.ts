import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TotalChangesRoutingModule } from './total-changes-routing.module';
import { TotalChangesComponent } from './total-changes.component';


@NgModule({
  declarations: [TotalChangesComponent],
  imports: [
    CommonModule,
    TotalChangesRoutingModule
  ]
})
export class TotalChangesModule { }
