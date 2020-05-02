
import {
	Component,
	ContentChildren,
	QueryList,
	AfterContentInit,
	ViewChild,
	ComponentFactoryResolver,
	ViewContainerRef,
	Input,
	Output,
	EventEmitter
} from '@angular/core';

import { TabComponent } from './tab.component';

@Component({
	selector: 'ds-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements AfterContentInit {
	@Input() css: string;
	@Output() getActiveTab: EventEmitter<any> = new EventEmitter();
	@Input() noDefault = true;
	@ContentChildren(TabComponent) tabChildren: QueryList<TabComponent>;

	get tabs() {
		return this.tabChildren && this.tabChildren.toArray();
	}

	// contentChildren are set
	ngAfterContentInit() {
		// get all active tabs
		const activeTabs = this.tabs.filter(tab => tab.active);
		// if there is no active tab set, activate the first
		if (activeTabs.length === 0 && this.noDefault) {
			this.setActiveTab(0);
		}
	}

	setActiveTab(index: number) {
		const tabs = this.tabs;
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].active = i === index;
		}
		this.getActiveTab.emit({ tab: tabs[index], i: index });
	}
}
