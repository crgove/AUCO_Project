import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import{ AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { /*HardCodeServicesModule,*/ ApiRestServicesModule } from './providers';
//import FirebaseServicesModule from './providers/Firebase/firebase.module';
import FirebaseSrc from './providers/Firebase/firebase.dataSource';
import FormsService from './services/forms.service';
import FormsProvider from './providers/Firebase/forms.provider';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import FirebaseServicesModule from './providers/Firebase/firebase.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ApiRestServicesModule,
    FirebaseServicesModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FirebaseSrc,
      {provide: FormsService, useClass: FormsProvider}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
