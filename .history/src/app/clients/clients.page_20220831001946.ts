import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  etaleComplement:boolean = true;

  constructor() { }

  ngOnInit() {
    this.clientCnnect = this.Authservice.stoken
    this.liv=this.Authservice.getDecodedAccessToken(this.livCnnect)
  }
  etalecomplement(){
    if(this.etaleComplement=== true){

      this.etaleComplement=false;
    }else{
      this.etaleComplement=true;
    }
  }

}
