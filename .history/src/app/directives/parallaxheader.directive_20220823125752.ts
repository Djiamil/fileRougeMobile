import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appParallaxheader]'
})
export class ParallaxheaderDirective {
  header:any;
  headerHeight:number;
  moveImage:number;
  scaleImage:number;

  constructor(public element: ElementRef,public renderer: Renderer2,private domCtrl: DomController) { }
  ngOnInit() {
    let content = this.element.nativeElement
    this.header = content.getElementsByClassName('parallaxximage')[0];
    this.domCtrl

  }

}
