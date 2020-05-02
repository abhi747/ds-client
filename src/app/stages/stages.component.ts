import { Component, OnInit, Input } from '@angular/core';
import { StagesService } from './services/stages.service';

@Component({
	selector: 'app-stages',
	templateUrl: './stages.component.html',
	styleUrls: ['./stages.component.scss']
})
export class StagesComponent implements OnInit {

	totalStages = 0;
	completedStages = 0;
	stages = [];
	constructor(
		private _stagesService: StagesService
	) { }

	ngOnInit(): void {
		this.totalStages = this._stagesService.getTotalStages();
		this.completedStages = this._stagesService.getCompletedStages();
		this.stages = Array(this.totalStages).fill(0);
	}

}
