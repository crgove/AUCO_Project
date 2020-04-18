import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormOfFormsPageRoutingModule } from './form-of-forms-routing.module';

import { FormOfFormsPage } from './form-of-forms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormOfFormsPageRoutingModule
  ],
  declarations: [FormOfFormsPage]
})
export class FormOfFormsPageModule {}
