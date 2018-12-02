import { ProductService } from '../../services/product/product.service';
import { UserService } from '../../services/user/user.service';
import { Product } from '../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { url } from '../../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  private imageURL = `${url}public/images/`;
  private quantity: number = 1;
  private alert: boolean = false;
  private product: Product = {
    id: 0,
    name: '',
    categoryID: 0,
    categoryName: '',
    description: '',
    price: 0,
    vendor: '',
    vendorID: 0
  };

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    userService.checkAuth();

    actRoute.params.subscribe(params => {
      let id = params['id'];

      productService.getProduct(id)
      .then((result: Product[]) => this.product = result[0])
      .catch(err => router.navigate(['not-found']));
    });
  }

  ngOnInit() {
  }

  public addToCart(): void {
    let item = {
      purchaserID: this.userService.getUserID(),
      productID: this.product.id,
      quantity: this.quantity
    }

    this.productService.addToCart(item)
    .then(result => this.alert = true)
    .catch(err => console.log(err));
  }

  public closeAlert(): void {
    this.alert = false;
  }
}