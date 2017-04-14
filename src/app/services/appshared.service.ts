import { Injectable } from '@angular/core';
import { Product } from '../common/product';

@Injectable()
export class AppSharedService {
    constructor() { }
    private productdetail: Product;
    getProductDetails() : Product {
        return this.productdetail;
    }
    setProductDetails(product: Product) : void {
        this.productdetail = product;
    }
}