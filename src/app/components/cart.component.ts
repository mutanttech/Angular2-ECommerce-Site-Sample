import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'cart',
    template: `
  <div style="margin-top:2px">
  <a routerLink="/cartdetails" class="btn btn-info btn-lg pull-right">
          <span class="glyphicon glyphicon-shopping-cart"></span> {{itemsCount}}
  </a>
  </div>
`
})
export class CartComponent implements OnInit {
    constructor(private cartService: CartService) { }
    itemsCount: Number;
    ngOnInit() {
        this.cartService.getCartItemsCount().subscribe((data: number) => this.itemsCount = data);
    }
}
