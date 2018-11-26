import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { GlobalRequestService } from './services/global-request/global-request.service';
import { ProductService } from './services/product/product.service';
import { UserService } from './services/user/user.service'

// Components
import { PublishProductComponent } from './components/publish-product/publish-product.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    SearchComponent,
    LoginRegisterComponent,
    ShoppingCartComponent,
    ProductComponent,
    PublishProductComponent
  ],
  imports: [
    APP_ROUTING,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GlobalRequestService,
    ProductService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
