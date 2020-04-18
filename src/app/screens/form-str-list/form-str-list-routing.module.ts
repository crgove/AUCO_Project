import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormStrListPage } from './form-str-list.page';

const routes: Routes = [
  {
    path: '',
    component: FormStrListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormStrListPageRoutingModule {}
