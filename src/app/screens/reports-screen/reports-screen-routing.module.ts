import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsScreenPage } from './reports-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ReportsScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsScreenPageRoutingModule {}
