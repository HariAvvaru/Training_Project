import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../Models/Login';
import { UserModel } from '../Models/User';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink],
  providers: [HttpClient, UserServiceService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  public uname: string = '';
  public upass: string = '';
  public uname1: string = '';
  public upass1: string = '';
  public role: string = 'User';
  public mno: number = 0;
  public showModal: boolean = true;
  public fname: string = '';

  public email: string = '';
  public count: number = 0;
  public isButtonDisabled: boolean = false;


  constructor(private userServiceObj: UserServiceService, private router: Router) { }

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
          console.log("User ID"+String(this.obj.userId));
        });
        // Navigate based on user role or credentials
        if (this.uname1 === "Kalyan" && this.upass1 === "Kalyan123") {
          // Close the modal
          this.showModal = false;
          this.router.navigate(["/admcrud"]);

        } else {
          this.showModal = false;
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
