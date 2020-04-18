import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pregunta1P2Page } from './pregunta1-p2.page';

const routes: Routes = [
  {
    path: '',
    component: Pregunta1P2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pregunta1P2PageRoutingModule {}
