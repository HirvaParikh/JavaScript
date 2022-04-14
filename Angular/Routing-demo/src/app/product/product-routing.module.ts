import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path:'product',
    component: ProductComponent,
    children:[
      {
        path:'',
        component:ProductHomeComponent,
        pathMatch:'full'
      },
      {
        path:':id',
        component:ProductDetailComponent
      }

    ]
  

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers :[]
})
export class ProductRoutingModule { }
