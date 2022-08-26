import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {


  constructor(private http: Http) {}
  getMenu():Observable<any>{
    return this.http.get<any>()
  }
}
