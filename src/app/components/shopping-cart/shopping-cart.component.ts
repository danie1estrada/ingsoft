import { ProductService } from '../../services/product/product.service';
import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  private items: any[];
  private subtotal: number = 0;

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {
    userService.checkAuth();

    productService.getCart(userService.getUserID())
    .then((results: any[]) => {
      this.items = results;
      this.items.forEach(item => this.subtotal += item.amount);
    })
    .catch(err => console.log(err));
  }

  ngOnInit() {
  }

}
