import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  username= new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('UserName'))));
  userId= new BehaviorSubject<string>(JSON.parse(JSON.stringify(localStorage.getItem('UserId'))));
  userCollection = new Subject<Comment>();
  private userUrl = environment.userUrl;
  constructor(private http :HttpClient, private router:Router) { 
    // localStorage.setItem('token', data.token);
    // localStorage.setItem('UserName', data.information.userName);
    // localStorage.setItem('UserId', data.information._id);

  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserName(){
    return this.username.toString();
  }

  updateName(userName: string) {
    this.http.patch(this.userUrl+'/api/'+JSON.parse(JSON.stringify(localStorage.getItem('UserId'))),{
      userName:userName
    }).subscribe((data:any)=>{
      console.log(data);
      this.router.navigate(['']);
    },(error)=>{
      // this.errorMessage=error.error.error;
      console.log(error);
      
    });
  }
  updatePassword(userPassword: string) {
    this.http.patch(this.userUrl+'/api/'+JSON.parse(JSON.stringify(localStorage.getItem('UserId'))),{
      userPassword:userPassword
    }).subscribe((data:any)=>{
      console.log(data);
      // this.logoutUser();
      this.router.navigate(['']);
    },(error)=>{
      console.log(error);
    });
  }
}
