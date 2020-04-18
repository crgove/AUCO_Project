import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormResListPage } from './form-res-list.page';

const routes: Routes = [
  {
    path: '',
    component: FormResListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormResListPageRoutingModule {}
