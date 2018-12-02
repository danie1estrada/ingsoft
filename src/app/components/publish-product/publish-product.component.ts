import { ProductService } from '../../services/product/product.service';
import { UserService } from '../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-product',
  templateUrl: './publish-product.component.html',
  styleUrls: ['./publish-product.component.css']
})
export class PublishProductComponent implements OnInit {

  private categories: any[];
  private product = {
    name: '',
    description: '',
    price: '',
    categoryID: '',
    vendorID: 0
  }

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router
  ) {
    userService.checkAuth();

    productService.getCategories()
    .then((result: any[]) => this.categories = result)
    .catch(err => console.log(err));

    this.product.vendorID = JSON.parse(localStorage.getItem('session')).id;
  }

  ngOnInit() {
  }

  public publish(): void {
    //console.log(this.product);
    this.productService.publishProduct(this.product)
    .then((result: any) => this.router.navigate([`product/${result.insertedID}`]))
    .catch(err => console.log(err));
  }
}
