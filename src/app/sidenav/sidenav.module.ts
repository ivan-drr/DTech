import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ControlBtnComponent } from './control-btn/control-btn.component';
import { GarageBtnComponent } from './garage-btn/garage-btn.component';
import { TvBtnComponent } from './tv-btn/tv-btn.component';
import { ExitBtnComponent } from './exit-btn/exit-btn.component';
import { SignOutBtnComponent } from './sign-out-btn/sign-out-btn.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [ControlBtnComponent, GarageBtnComponent, TvBtnComponent, ExitBtnComponent, SignOutBtnComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class SidenavModule { }
