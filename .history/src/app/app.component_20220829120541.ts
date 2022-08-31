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
  tafa = this.ctalogueservice.tafa;
  ngOnInit(){
    // this.ctalogueservice.cacheMenuconnexion(this.menuconnexion)
  this.ctalogueservice.cacheMenuconnexion(this.tafa)
  }

}
