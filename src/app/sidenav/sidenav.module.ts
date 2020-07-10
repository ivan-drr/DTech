import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Control } from './control.btn/control.btn.component';
import { Garage } from './garage.btn/garage.btn.component';
import { Tv } from './tv.btn/tv.btn.component';
import { Exit } from './exit.btn/exit.btn.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignOut } from './sign-out.btn/sign-out.btn.component';



@NgModule({
  declarations: [Control.BtnComponent, Garage.BtnComponent, Tv.BtnComponent, Exit.BtnComponent, NavbarComponent, SignOut.BtnComponent],
  imports: [
    CommonModule
  ]
})
export class SidenavModule { }
