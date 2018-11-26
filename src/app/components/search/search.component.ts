import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private products: Product[];
  private categories: any[];

  constructor(private productService: ProductService) {
    productService.getProducts()
    .then((result: Product[]) => this.products = result)
    .catch(err => console.log(err));

    productService.getCategories()
    .then((result: any[]) => this.categories = result)
    .catch(err => console.log('Error', err));
  }

  ngOnInit() {
  }

}
