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

  private thumbnail: string = null;
  private imageURL: string;
  private image: File;

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
    const formData = new FormData();

    formData.append('name', this.product.name);
    formData.append('price', this.product.price);
    formData.append('categoryID', this.product.categoryID);
    formData.append('description', this.product.description);
    formData.append('vendorID', this.product.vendorID.toString() );
    formData.append('image', this.image);

    console.log(formData)
    //console.log(this.product);
    this.productService.publishProduct(formData)
    .then((result: any) => this.router.navigate([`product/${result.insertedID}`]))
    .catch(err => console.log(err));
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.imageURL = event.target.result;
      }

      this.image = event.target.files[0];
      this.thumbnail = this.image.name.toString();
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
