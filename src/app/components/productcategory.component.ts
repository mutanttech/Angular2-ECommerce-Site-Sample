import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/appdata.service';
@Component({
    selector: 'productcategory',
    template: `
<div class="list-group">
    <a class="list-group-item" href="#" *ngFor="let category of categories">{{category.name}}</a> 
</div>
`
})

export class ProductCategoryComponent implements OnInit {
    constructor(private appDataService: AppDataService) { }
    categories: Array<any>;
    ngOnInit() {
        this.appDataService.getProductCategory().subscribe(
            response => this.categories = response,
            error => this.categories = []
        );
    }
}