import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.page.html',
  styleUrls: ['./detail-produit.page.scss'],
})
export class DetailProduitPage implements OnInit {
  parameters !: number;
  param!:string;
  constructor(private route: ActivatedRoute,
    private catalogueservice: CatalogueService    ) { }
    burgers:any[]=[];
  ngOnInit() {
    this.parameters = this.route.snapshot.params['id'];
    this.catalogueservice.getOnBurger(this.parameters).subscribe(data=>{
      this.burgers.push(data)
      // console.log(this.burgers)
    })
    this
  }
  convertImage(params:string){
   return this.catalogueservice.convertImage(params);
  }

}
