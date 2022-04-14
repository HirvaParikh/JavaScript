import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductHomeComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductModule { }
