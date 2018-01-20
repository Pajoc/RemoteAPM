import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http/src/response";
@Injectable()
export class ProductService{

    private _productUrl = './api/products/products.json';

    //injeta instancia Http nessa variavel
    constructor (private _http: HttpClient){

    }
    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);//Mapea a response para um array de produtos
//Temos de subscrever o observable retornado do serviço (productList component)
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}