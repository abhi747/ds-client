import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	@ViewChild('pinModal') pinModal: HTMLTemplateElement;
	constructor(
		private _modalService: NgbModal
	) { }

	ngOnInit(): void {
	}

	doLogin() {
		this._modalService.open(this.pinModal, { size: 'sm', centered: true })
	}
}
