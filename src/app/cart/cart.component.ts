import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems:any=[]
  // grand:Number=0
  grand:any;
  updatetotal:any;

  constructor(private cart:CartService,private fb:FormBuilder,private router:Router) { }

  orderForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    address:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    pincode:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(6),Validators.maxLength(6)]],
    street:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    country:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    phn:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]],
    email:['',[Validators.required,Validators.email]]
  })

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitems=data
      }
    )
    this.grand=this.cart.gettotal()
  }

  removeitem(product:any){
    this.cart.removecart(product)
    this.grand=this.cart.gettotal()
  }

  removeall(){
    this.cart.removeall()
  }

  discount5per(source:any){
    let discount=(this.grand*5)/100
    this.updatetotal=this.grand-discount
  }
  discount10per(){
    let discount=(this.grand*10)/100
    this.updatetotal=this.grand-discount
  }
  discount30per(){
    let discount=(this.grand*30)/100
    this.updatetotal=this.grand-discount
  }
  discount50per(){
    let discount=(this.grand*50)/100
    this.updatetotal=this.grand-discount
  }

  proceed(){
    if(this.orderForm.valid){
      this.router.navigateByUrl('payment-page')
      this.removeall()
    }
    else{
        alert('Invalid Form')
        this.router.navigateByUrl('cart')
        // window.location.reload()
    }
  }

}
