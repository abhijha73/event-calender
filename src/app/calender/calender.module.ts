import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderHomeComponent } from './calender-home/calender-home.component';
import { EventBoxComponent } from './event-box/event-box.component';
import { AddUpdateEventComponent } from './add-update-event/add-update-event.component';
import { SharedModule } from '../shared/shared.module';
import { CalenderViewComponent } from './calender-view/calender-view.component';


@NgModule({
  declarations: [
    CalenderHomeComponent,
    EventBoxComponent,
    AddUpdateEventComponent,
    CalenderViewComponent
  ],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    SharedModule
  ]
})
export class CalenderModule { }
