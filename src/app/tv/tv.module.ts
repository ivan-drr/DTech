import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@app/app-routing.module';

import { RemoteControlTvComponent } from './remote-control-tv/remote-control-tv.component';
import { TvPageComponent } from './tv-page/tv-page.component';

@NgModule({
  declarations: [RemoteControlTvComponent, TvPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class TvModule { }
