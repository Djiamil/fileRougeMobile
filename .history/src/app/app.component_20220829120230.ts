import { Component, OnInit } from '@angular/core';
import { CatalogueService } from './services/catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private ctalogueservice: CatalogueService) {}

  // menuconnexion:boolean = true;
  ngOnInit(){
    // this.ctalogueservice.cacheMenuconnexion(this.menuconnexion)
  }
  tafa = this.ctalogueservice.tafa;
  tafas = this.ctalogueservice.cacheMenuconnexion()

}
