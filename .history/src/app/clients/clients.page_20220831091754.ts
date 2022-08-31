import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  etaleComplement:boolean = true;

  constructor(private Authservice: AuthService) { }

  clientCnnect:any
  client:any
  ngOnInit() {  
    this.clientCnnect = this.Authservice.stoken
    this.client=this.Authservice.getDecodedAccessToken(this.clientCnnect)
    console.log(this.client.username)
  }
  getA
  etalecomplement(){
    if(this.etaleComplement=== true){

      this.etaleComplement=false;
    }else{
      this.etaleComplement=true;
    }
  }

}
