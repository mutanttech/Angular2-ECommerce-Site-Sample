import { Component, Input, OnInit } from '@angular/core';
import { AppDataService } from '../services/appdata.service';
import { AppSharedService } from '../services/appshared.service';
import { Product } from '../common/product';
import { Router } from '@angular/router';
@Component({
    selector: 'productlist',
    template: `
	<loader [displayLoading]="displayLoading"></loader>
	<div class="col-sm-4 col-lg-4 col-md-4" *ngFor="let product of products">
		<div class="thumbnail">
			<img alt="{{product.name}}" src="{{product.imagesrc}}" class="img-responsive" (click)="viewProductDetails(product)" >
			<div class="caption">
				<h5 class="text-justify"><a (click)="viewProductDetails(product)">{{product.name}}</a></h5>
				<h5 class="pull-left"><strong>{{product.price | currency: 'INR' : true }}</strong></h5>
			</div>
			<div class="caption addcart">
				<div class="pull-left">
					<addcart [product]="product"></addcart>
				</div>
			</div>
			<div class="ratings">
				<p class="pull-right">15 reviews</p>
				<p><span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span></p>
			</div>
		</div>
	</div>    
`
})
export class ProductListComponent implements OnInit {
    products: Product[];
    displayLoading: boolean;
    constructor(private appDataService: AppDataService, private appSharedService: AppSharedService, private router: Router) {
        this.products = [];
        this.displayLoading = false;
    }
    viewProductDetails(product: Product) {
        this.appSharedService.setProductDetails(product);
        console.log(product);
        this.router.navigate(['/productdetail', product._id["$oid"]]);
    }
    ngOnInit() {
        this.displayLoading = true;
        this.appDataService.getProducts().subscribe(
            response => this.onGetResponse(response),
            error => this.products = []);
    }
    onGetResponse(res: any) {
        this.displayLoading = false;
        this.products = res;
    }
}