import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdmincrudComponent } from './admincrud/admincrud.component';
import { CategoryComponent } from './category/category.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { CatdisplayComponent } from './catdisplay/catdisplay.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {path:"",component:MainpageComponent},
    {path:"admcrud",component:AdmincrudComponent},
    {path:"Home", component:DisplayProductComponent},
    {path:"Category", component:CategoryComponent}, 
    {path:"Catprod/:category", component:CatdisplayComponent},     
    {path:"ProductDet/:id", component:ProductDetailsComponent}
];
