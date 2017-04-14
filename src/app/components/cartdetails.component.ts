import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../common/product';
@Component({
selector : 'cartdetails',
template : `
        <div [style.display]="cartItems.length <= 0 ?  'inherit' : 'none'">
        <p>Oops, you have not added any items in cart.</p>
        </div> 
        <div [style.display]="cartItems.length > 0 ? 'inherit' : 'none'">
        <h3>Your Cart has following items:</h3>
            <table style="width:100%">
            <tr>         
            <td>Preview</td>
            <td>Name</td>
            <td>Price</td>
            <td>Qty</td>
           </tr>     
            <tr *ngFor="let item of cartItems">
            <td><img style="height:60px;width:50px" src="{{item.imagesrc}}" alt="{{item.name}}"/></td>
            <td>{{item.name}}</td>
            <td>{{item.price | number:'.2-2'}}</td>
            <td>{{item.orderedQty | number}}</td>
            </tr>
            </table>
        </div>
        <div style="margin-top:5px">
         <a routerLink="/">Continue Shopping</a>
        </div>
`
})
export class CartDetailsComponent implements OnInit {
    cartItems : Product[];
    constructor(private cartservice: CartService){
        this.cartItems = [];
    }

    ngOnInit(){
        this.cartItems = this.cartservice.getCartItems();
    }
}