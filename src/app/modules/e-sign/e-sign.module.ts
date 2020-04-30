import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ESignRoutingModule } from './e-sign-routing.module';
import { ESignComponent } from './e-sign.component';


@NgModule({
  declarations: [ESignComponent],
  imports: [
    CommonModule,
    ESignRoutingModule
  ]
})
export class ESignModule { }
