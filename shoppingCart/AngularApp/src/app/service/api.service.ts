import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http : HttpClient) { }

  API = "http://localhost:3000/product"

  getProduct(){
    return this.http.get(this.API)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
