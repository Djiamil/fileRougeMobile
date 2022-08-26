import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {


  constructor(private http: HttpClient,private sanitizer:DomSanitizer){}
  getMenu():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/menus')
  }
  convertImage(param: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/png;base64, " + param);
  }
  getburger(): Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/burgers');
  }
  //les deatilles des burgers
  getOnBurger(id:number): Observable<any>{
    return this.http.get<any>('http://localhost:8000/api/burgers/'+id)
  }

  getOnMenu
}
