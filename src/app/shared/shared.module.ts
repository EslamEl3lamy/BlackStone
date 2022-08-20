import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClickOutSideDirective } from './directives/click-out-side/click-out-side.directive';



@NgModule({
  declarations: [
    NavbarComponent,
    ClickOutSideDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ClickOutSideDirective
  ]
})
export class SharedModule { }
