import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenGarage } from './open-garage.btn/open-garage.btn.component';
import { CloseGarage } from './close-garage.btn/close-garage.btn.component';
import { RemoteControlGarageComponent } from './remote-control-garage/remote-control-garage.component';



@NgModule({
  declarations: [OpenGarage.BtnComponent, CloseGarage.BtnComponent, RemoteControlGarageComponent],
  imports: [
    CommonModule
  ]
})
export class GarageModule { }
