import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  constructor(private router:Router){}
  public products: { name: string, imageUrl: string }[] = [
    { name: 'Earbuds', imageUrl: 'https://www.boat-lifestyle.com/cdn/shop/files/True-wireless-earbuds_small.png?v=1684842854' },
    { name: 'Neckbands', imageUrl: 'https://www.boat-lifestyle.com/cdn/shop/files/Neckbands_bc6343f4-622f-4ebd-bb36-205643c3bf78_small.png?v=1684842854' },
    { name: 'Smartwatch', imageUrl: 'https://www.boat-lifestyle.com/cdn/shop/files/Smartwatches_88f12bcf-24bd-4e3a-aacb-ecc204f62179_small.png?v=1684842853' },
    { name: 'Wireless Headphones', imageUrl: 'https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Headphones_small.png?v=1684842854' },
    { name: 'Wireless Speakers', imageUrl: 'https://www.boat-lifestyle.com/cdn/shop/files/Wireless-Speaker_small.png?v=1684842854' },
    { name: 'Wired Headphones', imageUrl: 'https://www.boat-lifestyle.com/cdn/shop/files/Wired-Headphones_small.png?v=1684842854' },
    { name: 'Wired Earphones', imageUrl: 'https://www.boat-lifestyle.com/cdn/shop/files/Wired-Earphones_small.png?v=1684842854' },
    { name: 'Wireless Earbuds', imageUrl: 'https://www.boat-lifestyle.com/cdn/shop/files/w_de57f25b-de5b-4d1a-bed0-765975b25da8_small.png?v=1684847228' },
    { name: 'Soundbars', imageUrl: 'https://www.boat-lifestyle.com/cdn/shop/files/Soundbars_d9a7bdfd-e780-4581-ab85-f2e86f84cd28_small.png?v=1684842854' },
    { name: 'Gaming Headphones', imageUrl: 'https://www.boat-lifestyle.com/cdn/shop/files/Gaming-Headphones_small.png?v=1684842853' }
  ];



}
