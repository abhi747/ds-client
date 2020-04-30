import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ESignComponent } from './e-sign.component';

const routes: Routes = [{
	path: "",
	component: ESignComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ESignRoutingModule { }
