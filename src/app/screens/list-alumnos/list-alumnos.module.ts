import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAlumnosPageRoutingModule } from './list-alumnos-routing.module';

import { ListAlumnosPage } from './list-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAlumnosPageRoutingModule
  ],
  declarations: [ListAlumnosPage]
})
export class ListAlumnosPageModule {}
