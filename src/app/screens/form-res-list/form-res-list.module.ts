import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormResListPageRoutingModule } from './form-res-list-routing.module';

import { FormResListPage } from './form-res-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormResListPageRoutingModule
  ],
  declarations: [FormResListPage]
})
export class FormResListPageModule {}
