import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  username = new BehaviorSubject<string>(
    JSON.parse(JSON.stringify(localStorage.getItem('UserName')))
  );
  userId = new BehaviorSubject<string>(
    JSON.parse(JSON.stringify(localStorage.getItem('UserId')))
  );
  userCollection = new Subject<Comment>();
  currentUserId = new BehaviorSubject<string>('');
  private userUrl = environment.userUrl;
  private usertoken = environment.token;

  constructor(private http: HttpClient, private router: Router) {

  }
  getUsers() {
    //console.log("df")
    return this.http.get<{ [key: string]: User }>(this.userUrl).pipe(
      map((data) => {
        const userArray = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            userArray.push({ ...data[key], id: key });
          }
        }
        return userArray;
      })
    );
  }
  getUser() {
    const url = this.userUrl + '/' + this.currentUserId.value;
    console.log(url);
    return this.http.get<User>(url);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  setToken()
  {
    return this.usertoken;
  }
  getUserName() {
    return this.username.toString();
  }
  updateRole(userRole: string,id:string) {

  }
  updateName(userName: string, id:string) {
    const token = this.getToken();
    let headers=new HttpHeaders();
    headers=headers.append('Content-type','application/json');
    headers.append('Authorization','sdlfjkjhnn');
    console.log(headers);
    const options={
      headers,
      body:{
        username:userName,
        user: {
          _id: '6076c3e4d145df5910a70ac8',
          username: 'System',
          role: 'Admin',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN5c3RlbSIsImlkIjoiNjA3NmMzZTRkMTQ1ZGY1OTEwYTcwYWM4IiwiZXhwIjoxNjIzODcxODQ5LCJpYXQiOjE2MTg2ODc4NDl9.6nFJ9HWZ6-hZ7V3Bhl4H3dyLcowRZk2ZonMlNfeevLg',
        },
      }
    };
    this.http.patch<any>(this.userUrl+'/'+id,{
      options

    }).subscribe((data)=>
    {
      console.log(data);
    }
    );
  }
  updatePassword(userPassword: string) {
    this.http
      .patch(
        this.userUrl +
          '/api/' +
          JSON.parse(JSON.stringify(localStorage.getItem('UserId'))),
        {
          userPassword: userPassword,
        }
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          // this.logoutUser();
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
