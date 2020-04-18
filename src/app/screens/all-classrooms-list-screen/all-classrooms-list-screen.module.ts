import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllClassroomsListScreenPageRoutingModule } from './all-classrooms-list-screen-routing.module';

import { AllClassroomsListScreenPage } from './all-classrooms-list-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllClassroomsListScreenPageRoutingModule
  ],
  declarations: [AllClassroomsListScreenPage]
})
export class AllClassroomsListScreenPageModule {}
