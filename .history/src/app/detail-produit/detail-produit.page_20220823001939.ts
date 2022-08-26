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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.parameters = this.route.snapshot.params['id'];
    this
    console.log(this.parameters)
  }

}
