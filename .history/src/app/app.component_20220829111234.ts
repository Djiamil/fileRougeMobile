import { Component } from '@angular/core';
import { CatalogueService } from './services/catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements {
  constructor(private ctalogueservice: CatalogueService) {}

 menuconnexion = this.ctalogueservice.cacheMenuconnexion;
}
