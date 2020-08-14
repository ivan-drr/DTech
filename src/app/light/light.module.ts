import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLightBtnComponent } from './add-light-btn/add-light-btn.component';
import { LightCardComponent } from './light-card/light-card.component';
import { LightPageComponent } from './light-page/light-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { ColorSketchModule } from 'ngx-color/sketch';


@NgModule({
  declarations: [AddLightBtnComponent, LightCardComponent, LightPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatExpansionModule,
    ColorSketchModule 
  ]
})
export class LightModule { }
