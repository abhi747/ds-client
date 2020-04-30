import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	pathMatch: 'full',
	redirectTo: 'login'
}, {
	path: "login",
	loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
}, {
	path: "bank-details",
	loadChildren: () => import('./modules/bank-details/bank-details.module').then(m => m.BankDetailsModule)
}, {
	path: "e-kyc",
	loadChildren: () => import('./modules/e-kyc/e-kyc.module').then(m => m.EKycModule)
}, {
	path: "e-sign",
	loadChildren: () => import('./modules/e-sign/e-sign.module').then(m => m.ESignModule)
}, {
	path: "personal-details",
	loadChildren: () => import('./modules/personal-details/personal-details.module').then(m => m.PersonalDetailsModule)
}, {
	path: "thank-you",
	loadChildren: () => import('./modules/thank-you/thank-you.module').then(m => m.ThankYouModule)
}, {
	path: "total-changes",
	loadChildren: () => import('./modules/total-changes/total-changes.module').then(m => m.TotalChangesModule)
}, {
	path: "upload-documents",
	loadChildren: () => import('./modules/upload-documents/upload-documents.module').then(m => m.UploadDocumentsModule)
}];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
