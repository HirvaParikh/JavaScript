import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal!: number;
  public total: Number;
  public quantity: Number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  // handleChange() {
  //   this.cartService.change();
  // }
  add(item: { quantity: number; total: number; price: number }) {
    item.quantity++;
    item.total = Number((item.price * item.quantity).toFixed(2));
    this.grandTotal = Number((Number(this.grandTotal) + Number(item.price)).toFixed(2));
  }
  minus(item: { quantity: number; total: number; price: number }) {
    if (item.quantity >= 1) {
      item.quantity--;
      item.total = Number((item.price * item.quantity).toFixed(2));
      this.grandTotal = Number(((this.grandTotal) - Number(item.price)).toFixed(2));
    }
  }
  checkout() {
    this.cartService.removeAllCart();
    Swal.fire('Whooah!!', 'Order Placed Successfuly', 'success');
  }
}
