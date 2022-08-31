import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  myImagePath = 'https://resizer.otstatic.com/v2/photos/xlarge/1/26090377.jpg';
menus:any[]=[];
burgers:any[]=[];
  constructor(private catalogueservice: CatalogueService) { }
cacheImg:boolean = false;
cacheiconedetail:boolean = true;
  ngOnInit() {
    this.catalogueservice.getMenu().subscribe(data=>{
      this.menus = data;
    })
    this.catalogueservice. getburger().subscribe(burge=>{
      this.burgers = burge
      // console.log(burge);
    })
  }

  convertImage(param: string){
   return this.catalogueservice.convertImage(param);
  }

  getCatalogue(){
    this.cacheImg=true;
    this.cacheiconedetail=false;
    this.catalogueservice.getMenu().subscribe(data=>{
      this.menus = data;
    })
    this.catalogueservice. getburger().subscribe(burge=>{
      this.burgers = burge
      // console.log(burge);
    })
  }
  getCatalogues(){
    this.cacheImg=false;
    this.cacheiconedetail=true;
    this.catalogueservice.getMenu().subscribe(data=>{
      this.menus = data;
    })
    this.catalogueservice. getburger().subscribe(burge=>{
      this.burgers = burge
      // console.log(burge);
    })
  }

etaleComplement:boolean = true;

  etalecomplement(){
    if(this.etaleComplement=== true){

      this.etaleComplement=false;
    }else{
      this.etaleComplement=true;
    }
  }
  catalog
  cacheCatalogue(){

  }
}
