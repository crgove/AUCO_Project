import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassListScreenPageRoutingModule } from './class-list-screen-routing.module';

import { ClassListScreenPage } from './class-list-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassListScreenPageRoutingModule
  ],
  declarations: [ClassListScreenPage]
})
export class ClassListScreenPageModule {}
