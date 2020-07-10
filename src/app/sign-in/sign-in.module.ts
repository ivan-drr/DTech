import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignIn } from './sign-in.form/sign-in.form.component';
import { SignInGoogle } from './sign-in-google.btn/sign-in-google.btn.component';
import { SignInGoogle } from './sign-in-google.form/sign-in-google.form.component';
import { SignUp } from './sign-up.form/sign-up.form.component';
import { SignUp } from './sign-up.btn/sign-up.btn.component';



@NgModule({
  declarations: [SignIn.FormComponent, SignInGoogle.BtnComponent, SignInGoogle.FormComponent, SignUp.FormComponent, SignUp.BtnComponent],
  imports: [
    CommonModule
  ]
})
export class SignInModule { }
