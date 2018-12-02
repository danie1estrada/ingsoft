import { GlobalRequestService } from '../global-request/global-request.service';
import { Product } from '../../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'api/products';

  constructor(private globalRequest: GlobalRequestService, private http: HttpClient) { }

  public getProducts() {
    return this.globalRequest.get(this.url);
  }

  public getProduct(id: number) {
    return this.globalRequest.get(`${this.url}/${id}`);
  }

  public getProductsByCategory(id: number) {
    return this.globalRequest.get(`${this.url}/categories/${id}`);
  }

  public publishProduct(data: FormData) {
    return this.http.post(`${url}${this.url}`, data).toPromise();
  }

  public addToCart(item: any) {
    return this.globalRequest.post(item, `${this.url}/add-to-cart`);
  }

  public getCart(userID: number) {
    return this.globalRequest.post({ userID }, `${this.url}/shopping-cart`);
  }

  public getCategories() {
    return this.globalRequest.get(`${this.url}/categories`);
  }

  public purchase(body) {
    return this.globalRequest.post(body, `${this.url}/purchase`);
  }
}
