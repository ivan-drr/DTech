import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BrightnessBarComponent } from './brightness-bar/brightness-bar.component';
import { LdrBtnComponent } from './ldr-btn/ldr-btn.component';
import { LightBtnComponent } from './light-btn/light-btn.component';
import { MotionBtnComponent } from './motion-btn/motion-btn.component';


@NgModule({
  declarations: [CardComponent, BrightnessBarComponent, LdrBtnComponent, LightBtnComponent, MotionBtnComponent],
  imports: [
    CommonModule
  ]
})
export class RoomCardModule { }
