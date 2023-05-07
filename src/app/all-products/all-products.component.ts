import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  allproducts:any=[]

  searchterm:string=''

  filterCategory : any

  constructor( private api:ApiService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(
      (data:any)=>{
        this.allproducts=data
        this.filterCategory=data

        this.allproducts.forEach((a:any)=>{
          if(a.category === "men's clothing" || a.category === "women's clothing"){
            a.category ="fashion"
          }
        })
        console.log(this.allproducts);
        
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }

  search(event:any){
    let searchkey=event.target.value
    this.api.searchkey.next(searchkey)
  }

  filter(category:string){
    this.filterCategory = this.allproducts
    .filter((a:any)=>{
      if(a.category == category || category == ''){
        return a
      }
    })
  }

}
