import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLightBtnComponent } from './add-light-btn/add-light-btn.component';
import { LightCardComponent } from './light-card/light-card.component';
import { LightPageComponent } from './light-page/light-page.component';



@NgModule({
  declarations: [AddLightBtnComponent, LightCardComponent, LightPageComponent],
  imports: [
    CommonModule
  ]
})
export class LightModule { }
