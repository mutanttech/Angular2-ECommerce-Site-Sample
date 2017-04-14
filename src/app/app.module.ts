//Angular Component Imports
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule }           from '@angular/http';
//Application Component Imports
import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';
import { ProductListComponent } from './components/product.list.component';
import { ProductDetailComponent } from './components/productdetail.component';
import { ProductCategoryComponent } from './components/productcategory.component';
import { CartComponent } from './components/cart.component';
import { AddCartComponent } from './components/addcart.component';
import { CartDetailsComponent } from './components/cartdetails.component';
import { LoaderComponent } from './components/loader.component';
//Admin Component Imports
import { ManageProductComponent } from './admin/manageproduct.component';
//Service Imports
import { AppDataService } from './services/appdata.service';
import { AppSharedService } from './services/appshared.service';
import { CartService } from './services/cart.service';


const appRoutes : Routes = [
  {
    path: '',
    component: ProductListComponent,
    data: { title: 'Product List' }
  },
   {
    path: 'productlist',
    component: ProductListComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'productdetail/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Detail' }
  },
  {
    path: 'cartdetails',
    component: CartDetailsComponent,
    data: { title: 'Your Cart' }
  },
  {
    path: 'manageproduct',
    component: ManageProductComponent,
    data: { title: 'Manage Product' }
  }
];

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, UserComponent, ProductListComponent, CartComponent, AddCartComponent, ProductDetailComponent, ProductCategoryComponent, CartDetailsComponent,ManageProductComponent,LoaderComponent ],
  entryComponents: [ ProductListComponent ],
  bootstrap: [ AppComponent ],
  providers: [ AppDataService, CartService, AppSharedService ]

})
export class AppModule { }
