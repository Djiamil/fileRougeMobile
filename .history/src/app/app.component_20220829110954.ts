import { Component } from '@angular/core';
import { CatalogueComponent } from './catalogues/catalogue/catalogue.component';
import { CatalogueService } from './services/catalogue.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private ctalogueservice: CatalogueService) {}

}
