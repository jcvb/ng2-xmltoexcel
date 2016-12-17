import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { Ng2FileUploadComponent } from './ng2-file-upload/ng2-file-upload.component';

import {FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import * as spinner from 'ng-spin-kit/app/spinners';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>'
};

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    Ng2FileUploadComponent,
    FileSelectDirective,
    FileDropDirective,
    spinner.ThreeBounceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
