import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
etaleComplement:boolean = true;
  constructor() { }

  ngOnInit() {
  }
  etalecomplement(){
    if(etaleComplement= true)
    this.etaleComplement=false;
  }

}
