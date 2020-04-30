import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankDetailsRoutingModule } from './bank-details-routing.module';
import { BankDetailsComponent } from './bank-details.component';


@NgModule({
  declarations: [BankDetailsComponent],
  imports: [
    CommonModule,
    BankDetailsRoutingModule
  ]
})
export class BankDetailsModule { }
