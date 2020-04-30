import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalChangesComponent } from './total-changes.component';

const routes: Routes = [{
	path: "",
	component: TotalChangesComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TotalChangesRoutingModule { }
