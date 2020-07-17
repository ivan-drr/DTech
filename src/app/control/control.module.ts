import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RoomCardModule } from './room-card/room-card.module';
import { AddRoomBtnComponent } from './add-room-btn/add-room-btn.component';
import { ControlPageComponent } from './control-page/control-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [AddRoomBtnComponent, ControlPageComponent],
  imports: [
    CommonModule,
    RoomCardModule,
    RouterModule,
    MatCheckboxModule
  ],
})
export class ControlModule { }
