import { PublishProductComponent } from './components/publish-product/publish-product.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'publish', component: PublishProductComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'login', component: LoginRegisterComponent },
    { path: 'products', component: SearchComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'not-found' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);