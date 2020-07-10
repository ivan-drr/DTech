import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { Light } from './light.btn/light.btn.component';
import { Ldr } from './ldr.btn/ldr.btn.component';
import { Motion } from './motion.btn/motion.btn.component';
import { Brightness } from './brightness.btn/brightness.btn.component';



@NgModule({
  declarations: [CardComponent, Light.BtnComponent, Ldr.BtnComponent, Motion.BtnComponent, Brightness.BtnComponent],
  imports: [
    CommonModule
  ]
})
export class RoomCardModule { }
