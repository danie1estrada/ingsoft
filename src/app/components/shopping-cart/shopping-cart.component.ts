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
  private successful: boolean = false;

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

  private async purchase() {
    let purchaserEmail = JSON.parse(localStorage.getItem('session')).email;
    let purchaserID = this.userService.getUserID();

    for (let i = 0; i < this.items.length; i++) {
      let body = {
        purchaserID,
        purchaserEmail,
        product: this.items[i].name,
        vendorEmail: this.items[i].vendorEmail
      }

      try {
        console.log(await this.productService.purchase(body));
        this.items.splice(i, 1);
      } catch (err) {
        console.log(err);
      }
    }

    if (this.items.length == 0) this.successful = true;
  }
}
