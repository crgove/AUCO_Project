import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClassroomScreenPageRoutingModule } from './add-classroom-screen-routing.module';

import { AddClassroomScreenPage } from './add-classroom-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddClassroomScreenPageRoutingModule
  ],
  declarations: [AddClassroomScreenPage]
})
export class AddClassroomScreenPageModule {}
