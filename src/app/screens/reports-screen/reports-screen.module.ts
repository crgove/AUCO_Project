import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportsScreenPageRoutingModule } from './reports-screen-routing.module';

import { ReportsScreenPage } from './reports-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportsScreenPageRoutingModule
  ],
  declarations: [ReportsScreenPage]
})
export class ReportsScreenPageModule {}
