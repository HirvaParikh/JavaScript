import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { TokenStorageService } from 'src/app/service/tokenStorage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // accessToken = window.localStorage.getItem('auth-token');
  isSignedIn: Boolean = false;
  public totalItem: number = 0;
  public searchTerm!: string;
  constructor(
    readonly cartService: CartService,
    readonly tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });

    this.isSignedIn =
      window.localStorage.getItem('auth-token') === null ? false : true;
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  signOut() {
    Swal.fire('successfully signed out', 'Bye.. See you again', 'success');
    this.tokenService.signOut();
    setTimeout(() => {
      window.location.reload();
      window.location.href = '/login';
    }, 1000);
  }
}
