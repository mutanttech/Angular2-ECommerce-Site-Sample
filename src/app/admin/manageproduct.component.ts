import { Component, OnInit } from '@angular/core';
import { Product } from '../common/Product';
import { AppDataService } from '../services/appdata.service';
@Component({
    selector: 'manageproduct',
    template: `
<div>Manage Product</div>
 <br />
<form>
       <label for="saveMessage" class="btn btn-success" [style.display]="displayMessage ? 'inherit' : 'none'">{{saveMessage}}</label>
       <br />
       <div class="form-group">
        <label for="code">Code</label>
        <input type="text" class="form-control" id="name"  [(ngModel)]="productData.code" name="name" required />
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"  [(ngModel)]="productData.name" name="name" required />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description" [(ngModel)]="productData.description" name="description" required/>
      </div>
      <div class="form-group">
      <label for="imagesrc">ImageURL</label>
      <input type="text" class="form-control" id="imagesrc" [(ngModel)]="productData.imagesrc" name="imagesrc" required/>
      </div>
      <div class="form-group">
      <label for="imagesrc">Price</label>
      <input type="number" class="form-control" id="price" [(ngModel)]="productData.price" name="price" required/>
      </div>
      <div class="form-group">
      <label for="imagesrc">Discount</label>
      <input type="number" class="form-control" id="discount" [(ngModel)]="productData.discount" name="discount" required/>
      </div>
      <div class="form-group">
      <label for="imagesrc">Stock</label>
      <input type="number" class="form-control" id="stock" [(ngModel)]="productData.stock" name="stock" required/>
      </div>
      <button type="submit" class="btn btn-success" (click)="saveProduct(productData)">Save</button>
</form> 
`

})
export class ManageProductComponent implements OnInit {
    private productData: Product;
    private displayMessage: boolean;
    private saveMessage: string;

    constructor(private appDataService: AppDataService) {
        this.productData = new Product();
        this.displayMessage = false;
        this.saveMessage = '';
    }

    saveProduct(oproductData: Product): void {
        if (oproductData) {
            this.appDataService.saveProduct(oproductData)
                .subscribe(response  => this.saveProductSuccess(response),
                error => this.saveProductError(error));
        }
    }
    saveProductSuccess(response) {
        if (response) {
            console.log(response);
            this.productData = new Product();
            this.displayMessage = true;
            this.saveMessage = "Product Details are saved sucessfully.";
            var me = this;
            setTimeout(function () {
                me.saveMessage = "";
                me.displayMessage = false;
                console.log('timeout called');
            }, 3000);
        }
    }
    saveProductError(error) {
        if (error) {
            console.log(error);
            this.saveMessage = "Some problem occured while saving details. Please try aggain.";
        }
    }


    ngOnInit() {

    }
}

