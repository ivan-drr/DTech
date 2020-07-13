import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@app/app-routing.module';

import { RemoteControlGarageComponent } from './remote-control-garage/remote-control-garage.component';
import { CloseGarageBtnComponent } from './close-garage-btn/close-garage-btn.component';
import { OpenGarageBtnComponent } from './open-garage-btn/open-garage-btn.component';
import { GaragePageComponent } from './garage-page/garage-page.component';

@NgModule({
  declarations: [RemoteControlGarageComponent, CloseGarageBtnComponent, OpenGarageBtnComponent, GaragePageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class GarageModule { }
