import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './Models/User';
import { LoginModel } from './Models/Login';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpObj: HttpClient) {}

  public addUserDetails(obj:UserModel):Observable<string> {

    let url = 'https://localhost:7057/api/Authenticate/Register';
    return  this.httpObj.post<string>(url, obj);
  }

  public verifyUserDetails(obj:LoginModel):Observable<string> {
    let url = 'https://localhost:7057/api/Authenticate/Login';
    return this.httpObj.post<string>(url, obj);
  }

  public getUser(obj:LoginModel):Observable<UserModel>{
    let url = 'https://localhost:7057/api/Authenticate/UserDet';
    console.log(this.httpObj.post<UserModel>(url, obj));
    return this.httpObj.post<UserModel>(url, obj);

  }

}
