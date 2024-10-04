import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-display-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './display-product.component.html',
  styleUrl: './display-product.component.css'
})
export class DisplayProductComponent {

  public productsArray:any[] =[];

  constructor(private prodServiceObj:ProductServiceService){
    this.prodServiceObj.getAllProducts().subscribe((resData: any) => {  
      this.productsArray = resData.map((product: any) => {
        console.log(this.productsArray);
        // Calculate the discount amount
        let discountAmount: number = product.unitPrice * (product.discount / 100);
  
        // Calculate the final price after applying the discount
        product.finalPrice = product.unitPrice - discountAmount;
        console.log(this.productsArray);
        // Return the updated product object with the new finalPrice field
        return product;
      });
    });

  }

}
