import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddChildScreenPage } from './add-child-screen.page';

const routes: Routes = [
  {
    path: '',
    component: AddChildScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddChildScreenPageRoutingModule {}
