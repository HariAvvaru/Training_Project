import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { CartModel } from '../Models/Cart';

@Component({
  selector: 'app-catdisplay',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, RouterOutlet],
  templateUrl: './catdisplay.component.html',
  styleUrl: './catdisplay.component.css'
})
export class CatdisplayComponent {
  public productsArray:any[] =[];


  constructor(private activatedRoute:ActivatedRoute, private prodServiceObj:ProductServiceService) {
    let sid =   this.activatedRoute.snapshot.params["category"];
    this.prodServiceObj.getProductByCategory(sid).subscribe((resData: any) => {  
      this.productsArray = resData.map((product: any) => {
        // Calculate the discount amount
        let discountAmount: number = product.unitPrice * (product.discount / 100);
  
        // Calculate the final price after applying the discount
        product.finalPrice = product.unitPrice - discountAmount;
        // Return the updated product object with the new finalPrice field
        return product;
      });
    });
    console.log(this.productsArray);


   }

   addProd(id:number){
    let uid=Number(sessionStorage.getItem("UID"));
    let prodid=id;
    let obj:CartModel=new CartModel;
    obj.userId=uid;
    obj.productId=prodid;
    obj.quantity=1;
    this.prodServiceObj.addCart(obj).subscribe((resData:string)=>{
      alert("Product added to cart");
      return resData;
    });
   }
  

}
