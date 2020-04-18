import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import FormsService from 'src/app/services/forms.service';
import FormsProvider from './forms.provider';
import FirebaseSrc from './firebase.dataSource';
import { environment } from 'src/environments/environment';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
    ],
    providers: [
        FirebaseSrc,
        {provide: FormsService, useClass: FormsProvider}
    ]
})
export default class FirebaseServicesModule {}