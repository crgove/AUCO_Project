// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import FormsService from 'src/app/services/forms.service';
import FormsProvider from './forms.provider';
import FirebaseSrc from './firebase.dataSource';*/

export const environment = {
  production: false,

  firebaseConfig : {
    apiKey: "AIzaSyAVzekihDdVdb4w8qPRhGQIvjb5WjBM3Bc",
    authDomain: "bullyapp-8c9fe.firebaseapp.com",
    databaseURL: "https://bullyapp-8c9fe.firebaseio.com",
    projectId: "bullyapp-8c9fe",
    storageBucket: "bullyapp-8c9fe.appspot.com",
    messagingSenderId: "337584106489",
    appId: "1:337584106489:web:9946d8dfcc5b5c2b7ceb28",
    measurementId: "G-7ZHXWGSMES"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
