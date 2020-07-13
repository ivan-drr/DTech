import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@app/app-routing.module';

import { RoomCardModule } from './room-card/room-card.module';
import { AddRoomBtnComponent } from './add-room-btn/add-room-btn.component';
import { ControlPageComponent } from './control-page/control-page.component';

@NgModule({
  declarations: [AddRoomBtnComponent, ControlPageComponent],
  imports: [
    CommonModule,
    RoomCardModule,
    AppRoutingModule
  ]
})
export class ControlModule { }
