import { PublishProductComponent } from './components/publish-product/publish-product.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';

import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'login', component: LoginRegisterComponent },
    { path: 'products', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);