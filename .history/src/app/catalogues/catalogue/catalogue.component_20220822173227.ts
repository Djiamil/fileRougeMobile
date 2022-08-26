import { Component, OnInit } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
menu:any[]=[]
  constructor(private catalogueservice: CatalogueService) { }

  ngOnInit() {
    this.catalogueservice.getMenu().subscribe(data=>{
      this.menu = data;
      console.log(this.menu)
    })
  }

}