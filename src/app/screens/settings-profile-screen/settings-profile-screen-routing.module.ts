import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsProfileScreenPage } from './settings-profile-screen.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsProfileScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsProfileScreenPageRoutingModule {}
