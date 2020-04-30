import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalDetailsRoutingModule } from './personal-details-routing.module';
import { PersonalDetailsComponent } from './personal-details.component';


@NgModule({
  declarations: [PersonalDetailsComponent],
  imports: [
    CommonModule,
    PersonalDetailsRoutingModule
  ]
})
export class PersonalDetailsModule { }
