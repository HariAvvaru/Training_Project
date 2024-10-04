import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { LoginComponent } from './login/login.component';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Product } from './Models/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CategoryComponent,
    CategoryComponent,
    BestsellerComponent,
    DisplayProductComponent,
    LoginComponent,
    AdmincrudComponent,
    MainpageComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public count: number = 0;
  public st: string = '';
  public displayCount: string = '';
  public productObj: Product | null = null;
  constructor() {
    if (this.count == 0) {
      this.st = 'bi bi-handbag';
      this.displayCount = 'none';
    } else {
      this.st = 'bi bi-handbag-fill';
      this.displayCount = 'block';
    }
  }
  updateCart(productObj: Product) {
    this.productObj = productObj;
    this.count += 1;
    if (this.count > 0) {
      this.st = 'bi bi-handbag-fill';
      this.displayCount = 'block';
    }
  }}
