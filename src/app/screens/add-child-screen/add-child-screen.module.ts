import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddChildScreenPageRoutingModule } from './add-child-screen-routing.module';

import { AddChildScreenPage } from './add-child-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddChildScreenPageRoutingModule
  ],
  declarations: [AddChildScreenPage]
})
export class AddChildScreenPageModule {}
