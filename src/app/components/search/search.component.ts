import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { url } from '../../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private products: Product[];
  private aux: Product[];
  private categories: any[];
  private searchString: string = '';
  private imageURL = `${url}public/images/`;

  constructor(private productService: ProductService) {
    productService.getProducts()
    .then((result: Product[]) => this.products = this.aux = result)
    .catch(err => console.log(err));

    productService.getCategories()
    .then((result: any[]) => this.categories = result)
    .catch(err => console.log('Error', err));
  }

  ngOnInit() {
  }

  public search() {
    let s = this.searchString.toLowerCase();

    this.products = this.aux.filter(product => {
      if (s == null || s == '') return true;
      return (product.name.toLowerCase().includes(s) || product.description.toLowerCase().includes(s));
    });
  }

  public count(): number {
    return this.products != undefined ? this.products.length : 0;
  }
}
