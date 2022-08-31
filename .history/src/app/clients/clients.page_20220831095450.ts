import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
  etaleComplement:boolean = true;

  constructor(private Authservice: AuthService,private http: HttpClient) { }

  clientCnnect:any
  client:any
  clientEmail:any
  clientCommandes:any
  ngOnInit() {  
    this.clientCnnect = this.Authservice.stoken
    this.client=this.Authservice.getDecodedAccessToken(this.clientCnnect)
    this.getAllClient().subscribe(data=>{
      data.forEach(cli=>{
        this.clientEmail = cli.email
        if(cli.email!=this.client.username){
          this.clientEmail = cli
          clientCommandes=this.clientEmail.commandes)
        }
      })
    })
    // console.log(this.client.username)
  }
  getAllClient():Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/clients')
  }
  etalecomplement(){
    if(this.etaleComplement=== true){

      this.etaleComplement=false;
    }else{
      this.etaleComplement=true;
    }
  }

}
