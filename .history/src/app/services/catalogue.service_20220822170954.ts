import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {


  constructor() {}
  getMenu():Observable<any>{
    return this.http.get()
  }
}