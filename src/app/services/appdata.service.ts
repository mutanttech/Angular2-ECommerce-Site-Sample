import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxJS/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppDataService {
    private headers: Headers;
    private options: RequestOptions;
    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }
    getProducts(): Observable<Product[]> {
        let url = 'https://api.mlab.com/api/1/databases/ngdb/collections/products?s={"code" : -1 }&apiKey=3IjflLTIAh4MFesySH1jMFnrq22Gwd-y';
        return this.http.get(url, this.options).map(this.transformData);
    }
    transformData(res: Response) {
        return res.json() as Product[];
    }
    saveProduct(oproduct: Product): Observable<Response> {
        let url = 'https://api.mlab.com/api/1/databases/ngdb/collections/products?apiKey=3IjflLTIAh4MFesySH1jMFnrq22Gwd-y';
        return this.http.post(url, JSON.stringify(oproduct), this.options);
    }
    getProductCategory(): Observable<any> {
        let url = "https://api.mlab.com/api/1/databases/ngdb/collections/categories?apiKey=3IjflLTIAh4MFesySH1jMFnrq22Gwd-y";
        return this.http.get(url, this.options).map(res => res.json());
    }
    getProductsList() {
        let list = new Array<Product>();
        list.push(
            {
                _id: '1',
                code: 'M001',
                name: 'OnePlus 3T (Gunmetal, 6GB RAM + 64GB memory)',
                description: 'OnePlus 3T (Gunmetal, 6GB RAM + 64GB memory)',
                imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/81%2B4WXlorFL._SL500_SR82,160_.jpg',
                price: 29999,
                discount: 0,
                stock: 10,
                orderedQty: 0
            },
            {
                _id: '2',
                code: 'M0022',
                name: 'Samsung On7 Pro (Gold)',
                description: 'OnePlus 3T (Gunmetal, 6GB RAM + 64GB memory)',
                imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/81mKtZOvUmL._SL500_SR101,160_.jpg',
                price: 9490,
                discount: 0,
                stock: 10,
                orderedQty: 0
            },
            {
                _id: '3',
                code: 'M003',
                name: 'Coolpad Mega 2.5D (Grey)',
                description: 'Coolpad Mega 2.5D (Grey)',
                imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/71EVP%2BFtu5L._SL500_SR81,160_.jpg',
                price: 6999,
                discount: 0,
                stock: 10,
                orderedQty: 0
            },
            {
                _id: '4',
                code: 'M004',
                name: 'Moto G Plus, 4th Gen (White, 32 GB) - Upgradable to Android 7.0 Nougat',
                description: 'Moto G Plus, 4th Gen (White, 32 GB) - Upgradable to Android 7.0 Nougat',
                imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/81TrHL%2B3ogL._SL500_SR90,160_.jpg',
                price: 40615,
                discount: 0,
                stock: 10,
                orderedQty: 0
            },
            {
                _id: '5',
                code: 'M005',
                name: 'Apple iPhone 6 (Space Grey, 32GB)',
                description: 'Apple iPhone 6 (Space Grey, 32GB)',
                imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/814lO6nm9vL._SL500_SR160,160_.jpg',
                price: 28999,
                discount: 0,
                stock: 10,
                orderedQty: 0
            },
            {
                _id: '6',
                code: 'E001',
                name: 'JBL C100SI In-Ear Headphones with Mic (Black)',
                description: 'JBL C100SI In-Ear Headphones with Mic (Black)',
                imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/61-PrxofcPL._SL500_SR160,160_.jpg',
                price: 719,
                discount: 0,
                stock: 10,
                orderedQty: 0
            },
            {
                _id: '7',
                code: 'M005',
                name: 'Moto Z with Style Mod (Black, 64GB)',
                description: 'Moto Z with Style Mod (Black, 64GB)',
                imagesrc: 'https://images-na.ssl-images-amazon.com/images/I/41UFYOxPwRL._AA210_.jpg',
                price: 39999,
                discount: 0,
                stock: 10,
                orderedQty: 0
            }
        );
        return list;
    }
}