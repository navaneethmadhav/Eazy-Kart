import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartcount:number=0

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        if(data){
          this.cartcount=data.length;
        }
      }
    )
  }

}
