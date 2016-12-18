import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { Ng2FileUploadComponent } from './ng2-file-upload/ng2-file-upload.component';

import {FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { AngularFireModule } from 'angularfire2';

import { TruncatePipe } from './truncate-pipe/truncate-pipe';

import * as spinner from 'ng-spin-kit/app/spinners';

import { ENV_APIKEY, ENV_AUTHDOMAIN, ENV_DATABASEURL, ENV_STORAGEBUCKET } from './env';

// Must export the config
export const firebaseConfig = {
  apiKey: ENV_APIKEY,
  authDomain: ENV_AUTHDOMAIN,
  databaseURL: ENV_DATABASEURL,
  storageBucket: ENV_STORAGEBUCKET
};

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    Ng2FileUploadComponent,
    FileSelectDirective,
    FileDropDirective,
    spinner.ThreeBounceComponent,
    TruncatePipe
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
