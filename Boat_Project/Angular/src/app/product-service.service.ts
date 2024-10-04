import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Models/Product';
import { CartModel } from './Models/Cart';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public url:string = "https://localhost:7057/api/ProductApi";
  constructor(private httpObj:HttpClient) {

   }

   public getAllProducts():Observable<Product[]>
  {
    return  this.httpObj.get<Product[]>(this.url);
  }

  public getProductById(id:number):Observable<Product>
  {
    return  this.httpObj.get<Product>(this.url + "/" +  id);
  }

  public addProduct(obj:Product):Observable<string>
  {
    return this.httpObj.post<string>(this.url, obj);
  }

  public updateProduct(obj:Product):Observable<string>
  {
    return this.httpObj.put<string>(this.url, obj);
  }

  public deleteProductById(id:number):Observable<string>
  {
    return  this.httpObj.delete<string>(this.url + "/" +  id);
  }

  public getProductByCategory(category:string):Observable<Product[]>{
    return  this.httpObj.get<Product[]>(this.url + "/Category/" +  category);
  }

  public getImagesById(id:number):Observable<string[]>{
    return  this.httpObj.get<string[]>(this.url + "/Images/" +  id);
  }

  public GetCartById(id:number):Observable<CartModel[]>{
    return  this.httpObj.get<CartModel[]>(this.url + "/Cart/" +  id);
  }
  
  public addCart(obj:CartModel):Observable<string>
  {
    let urll='https://localhost:7057/api/ProductApi/Cart';

    return this.httpObj.post<string>(urll, obj);
  }

  public updateCart(obj:CartModel):Observable<string>
  {
    let urll='https://localhost:7057/api/ProductApi/Cart';

    return this.httpObj.put<string>(urll, obj);
  }


}
