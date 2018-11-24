import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductComponent } from './components/product/product.component';
import { PublishProductComponent } from './components/publish-product/publish-product.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
