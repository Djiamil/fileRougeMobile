import { Directive } from '@angular/core';

@Directive({
  selector: '[appParallaxheader]'
})
export class ParallaxheaderDirective {
  header:any;
  headerHeight:number;
  moveImage:number;
  scaleImage:number;

  constructor(public elem) { }

}
