import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormOfFormsPage } from './form-of-forms.page';

const routes: Routes = [
  {
    path: '',
    component: FormOfFormsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormOfFormsPageRoutingModule {}
