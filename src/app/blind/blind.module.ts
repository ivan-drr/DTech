import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@app/app-routing.module';
import { BlindPageComponent } from './blind-page/blind-page.component';
import { BlindCardComponent } from './blind-card/blind-card.component';
import { AddBlindBtnComponent } from './add-blind-btn/add-blind-btn.component';

@NgModule({
  declarations: [BlindPageComponent, BlindCardComponent, AddBlindBtnComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class BlindModule { }
