import { Injectable } from '@angular/core';

type NewType = Http;

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {


  constructor(private http: NewType) {}
  getMenu():Observable<any>{
    return this.http.get<any>('')
  }
}
