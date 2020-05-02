import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginSignupRoutingModule } from './login-signup-routing.module';
import { LoginSignupComponent } from './login-signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
	declarations: [LoginSignupComponent, LoginComponent, SignupComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule,
		LoginSignupRoutingModule,
		SharedModule
	]
})
export class LoginModule { }
