import { Component, OnInit } from '@angular/core';

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
  }

}
