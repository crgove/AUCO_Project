import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddClassroomScreenPage } from './add-classroom-screen.page';

const routes: Routes = [
  {
    path: '',
    component: AddClassroomScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddClassroomScreenPageRoutingModule {}
