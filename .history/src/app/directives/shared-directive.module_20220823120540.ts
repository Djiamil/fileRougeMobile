import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxheaderDirective } from './parallaxheader.directive';



@NgModule({
  declarations: [
    ParallaxheaderDirective
  ],
  exports: []
  imports: [
    CommonModule
  ]
})
export class SharedDirectiveModule { }
