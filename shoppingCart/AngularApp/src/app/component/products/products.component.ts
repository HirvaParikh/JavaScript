import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res.product;
      this.filterCategory = res.product;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  addtocart(item: any){
    if(item.isAdded === false){
      if(document.getElementById(item.id)?.innerHTML === "add to cart"){
        !window.localStorage.getItem('auth-token') ? window.location.href = "/login" : this.cartService.addtoCart(item);
        item.isAdded = true
        console.log(item);
      }
      else{
        !window.localStorage.getItem('auth-token') ? window.location.href = "/login" : this.cartService.removeFromCart(item);
        item.isAdded = false
        console.log(item);
      }
    }
    
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
