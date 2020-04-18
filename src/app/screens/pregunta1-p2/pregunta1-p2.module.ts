import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pregunta1P2PageRoutingModule } from './pregunta1-p2-routing.module';

import { Pregunta1P2Page } from './pregunta1-p2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pregunta1P2PageRoutingModule
  ],
  declarations: [Pregunta1P2Page]
})
export class Pregunta1P2PageModule {}
