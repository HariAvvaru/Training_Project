import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers:[ProductServiceService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  public imgArray: string[] = [
    
  ];
  public productArray: any = new Product();  // Initialized as an object

constructor(
  private imageObj: ProductServiceService,
  private activatedRoute: ActivatedRoute
) {
  let sid = this.activatedRoute.snapshot.params['id'];

  // Fetching images by product ID
  this.imageObj.getImagesById(sid).subscribe((resData: any) => {
    this.imgArray = resData.map((product: any) => {
      return product;
    });
  });

  // Fetching product details by product ID and calculating final price
  this.imageObj.getProductById(sid).subscribe((resData: any) => {
    // Calculate the discount amount
    let discountAmount: number = resData.unitPrice * (resData.discount / 100);

    // Calculate the final price after applying the discount
    resData.finalPrice = resData.unitPrice - discountAmount;

    // Assign the fetched product data to productArray
    this.productArray = resData;  // This now works as you're assigning the actual product data
  });
}

  

  // Initially set the main image
  public imgurl: string =this.imgArray[0];

  // Method to update the main image when hovering over thumbnails
  public updateMainImage(newImage: string): void {
    this.imgurl = newImage;
  }
}

