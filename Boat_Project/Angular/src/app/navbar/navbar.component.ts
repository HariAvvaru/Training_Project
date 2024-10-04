import { Component ,Input} from '@angular/core';
import { Product } from '../Models/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../Models/Login';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserModel } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { ProductServiceService } from '../product-service.service';
import { CartModel } from '../Models/Cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,FormsModule,  RouterOutlet, RouterLink],
  providers: [HttpClient, UserServiceService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() count: number = 0;
  @Input() st: string = '';
  @Input() displayCount: string = '';
  @Input() productObj: Product | null = null;

  public uname: string = '';
  public upass: string = '';
  public uname1: string = '';
  public upass1: string = '';
  public role: string = 'User';
  public mno: number = 0;
  public showModal: string = '';
  public fname: string = '';

  public email: string = '';
  public isButtonDisabled: boolean = false;
  public sid:number=0;
  
  public countquant:number=0;
  public cartArray:any[]=[];
  public prodArray:Product[]=[];

  public cartSum:number=0;

  constructor(private userServiceObj: UserServiceService, private router: Router, private productServiceObj:ProductServiceService, private activatedRoute:ActivatedRoute) {

   }

   callProduct():void{
    this.sid =  Number(sessionStorage.getItem("UID"));
    console.log("User ID"+this.sid);

    this.productServiceObj.GetCartById(this.sid).subscribe((resData: any) => {  
      this.cartArray=resData;
      for(let item of this.cartArray){
        this.productServiceObj.getProductById(item.productId).subscribe((resData1:Product)=>{
          this.prodArray.push(resData1);
          this.cartSum+=resData1.unitPrice*item.quantity;
        });
      }
      
    });    
    console.log(this.cartArray); 
    
      console.log(this.prodArray);   
   }

   plusQuant(id:number){
    let objCart:CartModel=new CartModel();
      objCart.productId=id;
      objCart.userId=Number(sessionStorage.getItem("UID"));
      this.countquant+=1;
      objCart.quantity=this.countquant;
      this.productServiceObj.updateCart(objCart).subscribe((resData:string)=>{
          alert("Updated");
      })
   }

  clearFields() {
    this.uname = '';
    this.upass = '';
    this.mno = 0;

    this.fname = '';

    this.email = '';
  }

  public obj:UserModel =new UserModel;
  validateUser() {
    let loginObj: LoginModel = new LoginModel();
    loginObj.userName = this.uname1;
    loginObj.password = this.upass1;

    this.userServiceObj.verifyUserDetails(loginObj).subscribe(
      (resData: any) => {
        sessionStorage.setItem('AUTH_TOKEN', resData.token);
        sessionStorage.setItem('currentUser', this.uname1);
        this.userServiceObj.getUser(loginObj).subscribe((resData:any) =>{
          this.obj=resData.ub;
          alert("Login Successful");

          sessionStorage.setItem("UID",String(this.obj.userId) );
          this.callProduct();
        });
        // Navigate based on user role or credentials
        if (this.uname1 === "Kalyan" && this.upass1 === "Kalyan123") {
          // Close the modal
          this.showModal = 'modal';
          this.router.navigate(["/admcrud"]);
        } else {
          this.showModal = 'modal';
          this.router.navigate([""]);
        }

      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }


  registerUser() {
    let userObj: UserModel = new UserModel();
    userObj.userName = this.uname;
    userObj.password = this.upass;
    userObj.role = this.role;
    userObj.mobileNo = this.mno;
    userObj.name = this.fname;
    userObj.emailId = this.email;

    this.userServiceObj.addUserDetails(userObj).subscribe(
      (resData: any) => {
        alert(resData.result);
        this.clearFields();
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }



}
