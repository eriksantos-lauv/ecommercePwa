import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemResumePageRoutingModule } from './item-resume-routing.module';

import { ItemResumePage } from './item-resume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemResumePageRoutingModule
  ],
  declarations: [ItemResumePage]
})
export class ItemResumePageModule {}
