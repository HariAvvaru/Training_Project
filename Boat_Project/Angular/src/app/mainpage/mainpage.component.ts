import { Component } from '@angular/core';
import { DisplayProductComponent } from '../display-product/display-product.component';
import { CategoryComponent } from '../category/category.component';
import { BestsellerComponent } from '../bestseller/bestseller.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [DisplayProductComponent,CategoryComponent,BestsellerComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent {

}
