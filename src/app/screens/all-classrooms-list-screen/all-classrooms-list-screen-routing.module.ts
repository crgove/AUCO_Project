import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllClassroomsListScreenPage } from './all-classrooms-list-screen.page';

const routes: Routes = [
  {
    path: '',
    component: AllClassroomsListScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllClassroomsListScreenPageRoutingModule {}
