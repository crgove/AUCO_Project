import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormStrListPageRoutingModule } from './form-str-list-routing.module';

import { FormStrListPage } from './form-str-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormStrListPageRoutingModule
  ],
  declarations: [FormStrListPage]
})
export class FormStrListPageModule {}
