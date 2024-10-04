import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-admincrud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admincrud.component.html',
  styleUrl: './admincrud.component.css',
})
export class AdmincrudComponent {
  public productsArray: any[] = [];
  public selectedSid: number = 0;

  public pname: string = '';
  public pdesc: string = '';
  public pspec: string = '';
  public pprice: number = 0;
  public pquant: number = 0;
  public pcat: string = '';
  public preview: number = 0;
  public pdiscount: number = 0;
  public prating: number = 0;
  public imgurl: string = '';
  constructor(private prodServiceObj: ProductServiceService) {}
  getDataButtonClick() {
    this.prodServiceObj.getAllProducts().subscribe((resData: any) => {
      this.productsArray = resData.map((product: any) => {
        console.log(this.productsArray);
        // Calculate the discount amount
        let discountAmount: number =
          product.unitPrice * (product.discount / 100);

        // Calculate the final price after applying the discount
        product.finalPrice = product.unitPrice - discountAmount;
        console.log(this.productsArray);
        // Return the updated product object with the new finalPrice field
        return product;
      });
    });
  }

  public deleteClick(pid: number) {
    let flag: boolean = confirm('Do you want to delete?');

    if (flag == false) {
      return;
    }

    this.prodServiceObj.deleteProductById(pid).subscribe((resData: any) => {
      alert(resData.status);
      this.getDataButtonClick();
    });
  }

  public selectClick(sid: number) {
    this.prodServiceObj.getProductById(sid).subscribe((resData: Product) => {
      // console.log(resData);
      this.selectedSid = resData.productId;
      this.pname = resData.productName;
      this.pdesc = resData.productDescription;
      this.pspec = resData.productSpecification;
      this.pdiscount = resData.discount;
      this.pcat = resData.category;
      this.pprice = resData.unitPrice;
      this.pquant = resData.quantity;
      this.prating = resData.rating;
      this.preview = resData.reviewsCount;
      this.imgurl = resData.imgUrl;
    });

  }

  public addButtonClick() {
    this.clearFields();
    let obj: Product = new Product();
    obj.productId = 0;
    obj.productName = this.pname;
    obj.productDescription = this.pdesc;
    obj.productSpecification = this.pspec;
    obj.discount = this.pdiscount;
    obj.category = this.pcat;
    obj.unitPrice = this.pprice;

    obj.quantity = this.pquant;
    obj.rating = this.prating;
    obj.reviewsCount = this.preview;
    obj.imgUrl = this.imgurl;

    this.prodServiceObj.addProduct(obj).subscribe((resData: any) => {
      alert(resData.status);
      this.getDataButtonClick();
      this.clearFields();
    });
  }

  public clearFields() {
    this.pname = '';
    this.pdesc = '';
    this.pdiscount = 0;
    this.pcat = '';
    this.pprice = 0;
    this.prating = 0;
    this.preview = 0;
    this.imgurl = '';
    this.pquant = 0;
  }

  public updateButtonClick() {
    let obj: Product = new Product();
    obj.productId = this.selectedSid;
    obj.productName = this.pname;
    obj.productDescription = this.pdesc;
    obj.productSpecification = this.pspec;
    obj.discount = this.pdiscount;
    obj.category = this.pcat;
    obj.unitPrice = this.pprice;
    obj.quantity = this.pquant;
    obj.rating = this.prating;
    obj.reviewsCount = this.preview;
    obj.imgUrl = this.imgurl;

    this.prodServiceObj.updateProduct(obj).subscribe((resData: any) => {
      alert(resData.status);
      this.getDataButtonClick();
    });
  }
}
