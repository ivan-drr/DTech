import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@app/@core/page-not-found/page-not-found.component';
import { SigninFormComponent } from '@app/login/signin-form/signin-form.component';
import { SignupFormComponent } from '@app/login/signup-form/signup-form.component';
import { SigninGoogleFormComponent } from '@app/login/signin-google-form/signin-google-form.component';
import { SidenavComponent } from '@app/sidenav/sidenav/sidenav.component';
import { ControlPageComponent } from '@app/control/control-page/control-page.component';
import { GaragePageComponent } from '@app/garage/garage-page/garage-page.component';
import { TvPageComponent } from '@app/tv/tv-page/tv-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: SigninFormComponent },
      { path: 'signup', component: SignupFormComponent },
      { path: 'google-login', component: SigninGoogleFormComponent }
    ],
  },
  {
    path: 'app',
    component: SidenavComponent,
    children: [
      { path: 'control', component: ControlPageComponent },
      { path: 'garage', component: GaragePageComponent },
      { path: 'tv', component: TvPageComponent }
    ]
  },
  {
    path: 'app/control',
    loadChildren: () =>
      import('./control/control.module').then(c => c.ControlModule),
  },
  {
    path: 'app/garage',
    loadChildren: () =>
      import('./garage/garage.module').then(c => c.GarageModule),
  },
  {
    path: 'app/tv',
    loadChildren: () =>
      import('./tv/tv.module').then(c => c.TvModule),
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
