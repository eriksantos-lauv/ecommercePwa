import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemResumePage } from './item-resume.page';

const routes: Routes = [
  {
    path: '',
    component: ItemResumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemResumePageRoutingModule {}
