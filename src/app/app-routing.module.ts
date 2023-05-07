import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

const routes: Routes = [
  {
    path:'',component: AllProductsComponent
  },
  {
    path:'cart', component: CartComponent
  },
  {
    path:'view-product/:id', component:ViewProductComponent
  },
  {
    path:'payment-page', component:PaymentPageComponent
  },
  {
    path:'**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
