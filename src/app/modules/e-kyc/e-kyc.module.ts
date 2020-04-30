import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EKycRoutingModule } from './e-kyc-routing.module';
import { EKycComponent } from './e-kyc.component';


@NgModule({
  declarations: [EKycComponent],
  imports: [
    CommonModule,
    EKycRoutingModule
  ]
})
export class EKycModule { }
