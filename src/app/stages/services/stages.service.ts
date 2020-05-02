import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StagesService {

	private totalStages = 5;
	private completedStages = 0;
	constructor() { }

	getCompletedStages(): number {
		return this.completedStages;
	}

	getTotalStages(): number {
		return this.totalStages;
	}

	incrementStages(): void {
		this.completedStages++;
	}

	derementStages(): void {
		this.completedStages--;
	}
}
