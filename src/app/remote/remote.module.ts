import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddRemoteBtnComponent } from './add-remote-btn/add-remote-btn.component';
import { RemoteCardComponent } from './remote-card/remote-card.component';
import { RemotePageComponent } from './remote-page/remote-page.component';

@NgModule({
  declarations: [AddRemoteBtnComponent, RemoteCardComponent, RemotePageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RemoteModule { }
