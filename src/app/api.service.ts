import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchkey = new BehaviorSubject('')

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  viewProduct(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
}
