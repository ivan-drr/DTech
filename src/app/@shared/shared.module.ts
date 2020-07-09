import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AuthDirective } from './directives/auth.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SafePipe } from './pipes/safe.pipe';



@NgModule({
  declarations: [LoaderComponent, AuthDirective, CapitalizePipe, SafePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
