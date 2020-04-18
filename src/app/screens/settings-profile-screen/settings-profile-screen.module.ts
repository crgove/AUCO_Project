import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsProfileScreenPageRoutingModule } from './settings-profile-screen-routing.module';

import { SettingsProfileScreenPage } from './settings-profile-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsProfileScreenPageRoutingModule
  ],
  declarations: [SettingsProfileScreenPage]
})
export class SettingsProfileScreenPageModule {}
