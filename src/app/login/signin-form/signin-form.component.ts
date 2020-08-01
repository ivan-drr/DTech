import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
const assets = "../../assets/";

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})

export class SigninFormComponent {
  GooglePlusImage = assets + "icons/google-plus.png";
  AccessIcon = assets + "icons/access.png";
  password = '';
  user = '';

  userFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
