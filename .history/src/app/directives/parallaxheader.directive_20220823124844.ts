import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appParallaxheader]'
})
export class ParallaxheaderDirective {
  header:any;
  headerHeight:number;
  moveImage:number;
  scaleImage:number;

  constructor(public element: ElementRef,public renderer: Renderer2,private dom) { }

}
