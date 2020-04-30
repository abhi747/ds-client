import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadDocumentsRoutingModule } from './upload-documents-routing.module';
import { UploadDocumentsComponent } from './upload-documents.component';


@NgModule({
  declarations: [UploadDocumentsComponent],
  imports: [
    CommonModule,
    UploadDocumentsRoutingModule
  ]
})
export class UploadDocumentsModule { }
