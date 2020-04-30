import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EKycComponent } from './e-kyc.component';

const routes: Routes = [{
	path: "",
	component: EKycComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EKycRoutingModule { }
