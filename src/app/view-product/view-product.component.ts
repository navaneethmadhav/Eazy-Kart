import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productid:any
  productdata:any

  constructor(private ar:ActivatedRoute, private api:ApiService, private cart:CartService) { }

  ngOnInit(): void {

    this.ar.params.subscribe((data:any)=>{
      this.productid=data["id"];
      
    })

    this.api.viewProduct(this.productid).subscribe((item:any)=>{
      // console.log(item);
      this.productdata=item
      
    })

  }

  addcart(product:any){
    this.cart.addcart(product)
  }

}
