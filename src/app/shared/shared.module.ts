import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { StagesComponent } from '../stages/stages.component';



@NgModule({
	declarations: [
		TabsComponent,
		TabComponent,
		NavbarComponent,
		StagesComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		TabsComponent,
		TabComponent,
		NavbarComponent,
		StagesComponent
	]
})
export class SharedModule { }
