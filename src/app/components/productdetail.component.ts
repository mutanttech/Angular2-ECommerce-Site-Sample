import { Component, Input, OnInit } from '@angular/core';
import { AppSharedService } from '../services/appshared.service';
import { Product } from '../common/product';

@Component({
    selector: 'productdetail',
    template: `<div>
    <div>
    <img class="thumbnail large"  src="{{productdetail?.imagesrc}}" alt="{{productdetail?.name}}"/>
    </div>
    <div>
    <br/><br />
        {{productdetail?.name}} <br />
        {{productdetail?.price | currency : 'INR' : true }} <br />
        Qty Ordered: {{productdetail?.orderedQty}}
        <br /><br />
        <addcart [product]="productdetail"></addcart>
    </div>
    <br />
    <a routerLink='/productlist'>Continue Shopping</a>
</div>`

})

export class ProductDetailComponent implements OnInit {
    constructor(private appSharedService: AppSharedService) { }
    productdetail: Product;

    ngOnInit() {
        this.productdetail = this.appSharedService.getProductDetails();
    }

}