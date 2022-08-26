import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.page.html',
  styleUrls: ['./detail-produit.page.scss'],
})
export class DetailProduitPage implements OnInit {
  parameters !: number;
  param!:string;
  constructor(private route: ActivatedRoute,
    private cataloguer    ) { }

  ngOnInit() {
    this.parameters = this.route.snapshot.params['id'];
  
    console.log(this.parameters)
  }

}
