import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../common/product';

@Component({
    selector: 'addcart',
    template: `<div>
<button (click)="addToCart(product)" class="btn btn-success"> Add to Cart </button> 
</div>
`
})

export class AddCartComponent {
    @Input() product: Product;

    constructor(private cartService: CartService) { }

    addToCart(product: Product) {
        if (product) {
            this.cartService.addItemToCart(product);
        }
        else {
            console.log('Please select a product.');
        }
    }
}