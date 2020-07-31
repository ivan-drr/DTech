import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupBtnComponent } from './signup-btn/signup-btn.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SigninGoogleBtnComponent } from './signin-google-btn/signin-google-btn.component';
import { SigninGoogleFormComponent } from './signin-google-form/signin-google-form.component';

@NgModule({
  declarations: [SigninFormComponent, SigninGoogleBtnComponent, SigninGoogleFormComponent, SignupBtnComponent, SignupFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    SigninFormComponent
  ]
})
export class LoginModule { }
