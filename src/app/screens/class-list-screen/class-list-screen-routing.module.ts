import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassListScreenPage } from './class-list-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ClassListScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassListScreenPageRoutingModule {}
