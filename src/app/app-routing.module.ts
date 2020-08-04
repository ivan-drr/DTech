import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@app/@core/page-not-found/page-not-found.component';
import { SigninFormComponent } from '@app/login/signin-form/signin-form.component';
import { SignupFormComponent } from '@app/login/signup-form/signup-form.component';
import { SidenavComponent } from '@app/sidenav/sidenav/sidenav.component';
import { RoomPageComponent } from '@app/room/room-page/room-page.component';
import { LightPageComponent } from '@app/light/light-page/light-page.component';
import { BlindPageComponent } from '@app/blind/blind-page/blind-page.component';
import { RemotePageComponent } from '@app/remote/remote-page/remote-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: SigninFormComponent },
      { path: 'signup', component: SignupFormComponent }
    ],
  },
  {
    path: 'app',
    component: SidenavComponent,
    children: [
      { path: 'rooms', component: RoomPageComponent },
      { path: 'lights', component: LightPageComponent },
      { path: 'blinds', component: BlindPageComponent },
      { path: 'remotes', component: RemotePageComponent },
    ]
  },
  {
    path: 'app/rooms',
    loadChildren: () =>
      import('./room/room.module').then(c => c.RoomModule),
  },
  {
    path: 'app/lights',
    loadChildren: () =>
      import('./light/light.module').then(c => c.LightModule),
  },
  {
    path: 'app/blinds',
    loadChildren: () =>
      import('./blind/blind.module').then(c => c.BlindModule),
  },
  {
    path: 'app/remotes',
    loadChildren: () =>
      import('./remote/remote.module').then(c => c.RemoteModule),
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
