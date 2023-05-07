import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { ViewProductComponent } from './view-product/view-product.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentPageComponent } from './payment-page/payment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    CartComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe,
    ViewProductComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
