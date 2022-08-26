import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {


  constructor(private http: HttpClient){}
  getMenu():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/menus')
  }
}
