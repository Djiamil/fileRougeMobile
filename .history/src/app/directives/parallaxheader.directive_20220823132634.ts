import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
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
    this.domCtrl.read(()=>{
      this.headerHeight = this.header.clientHeight;
      console.log('Height: ',this.headerHeight);
    })

  }
  @HostListener('ionScroll', ['$event']) onContentScroll($event){
    console.log('EVENT: ', event)
    const scrollTop = event.detail.scrollTop;

    this.domCtrl.write(()=>{
      this.headerHeight = this.header.clientHeight;
      console.log('Height: ',this.headerHeight);
      if(scrollTop >0){

        this.moveImage = scrollTop / 3;
        this.scaleImage = 1;
      }else{
        this.moveImage = scrollTop / 3;
      }
      this.renderer.setStyle(this.header, 'webkitTransform',
      'translate3d(0,'+ this.moveImage +'px+0) scale('+ this.scaleImage+',' + this.scaleImage+')'
      )
    })
  }

}
