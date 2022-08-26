import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {


  constructor(private) {}
  getMenu():Observable<any>{
    return this.http.get()
  }
}
