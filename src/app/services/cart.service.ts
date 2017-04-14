import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable, Subject, BehaviorSubject} from 'rxjs/Rx';  

@Injectable()
export class CartService {
    constructor() { }
    cartItems = new Array<Product>();
    private itemsCount = new BehaviorSubject<Number>(0);

    addItemToCart(product: Product): void {
        
        let itemAlreadyAdded = this.cartItems.filter((p: Product) => product.code === p.code)[0];
        if(itemAlreadyAdded){
          itemAlreadyAdded.orderedQty = itemAlreadyAdded.orderedQty + 1;
        }
        else{
            product.orderedQty = 1;
            this.cartItems.push(product);    
        }

        if(this.cartItems){
            this.itemsCount.next(this.cartItems.length)
        }
        else{
            this.itemsCount.next(0);
        }
    }
    removeItemFromCart(product: Product): void {

    }
    getCartItems() : Product[]{
        return this.cartItems;
    }
    getCartItemsCount() : any {
        return this.itemsCount.asObservable();
    }
}
