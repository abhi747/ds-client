import { Component, OnInit } from '@angular/core';
import { StagesService } from 'src/app/stages/services/stages.service';

@Component({
	selector: 'app-login-signup',
	templateUrl: './login-signup.component.html',
	styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

	constructor(
		private _stagesService: StagesService
	) { }

	ngOnInit(): void {
		this._stagesService.incrementStages();
	}

}
