import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { Comment } from '../models/comment.model';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  errorMessage = "";
  loginError = new BehaviorSubject<string>("");
  registerError = new BehaviorSubject<string>("");
  commentUrl = environment.commentUrl;
  constructor(private userService : UserService, private http : HttpClient,private router: Router) { }

  getComments() {
  }
  getComment(_id : string )
  {
    this.http
  }
  addComment(_id: string, body: string, user: User)
  {
    const token = this.userService.getToken(); 
    const headers =new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+token});
    this.http.post<Comment>(this.commentUrl,{
      body:body,
      user: user,
      id:_id
    }).toPromise().then((data:any)=>{
      console.log(data);
      
    }).catch( (error)=>{
      this.errorMessage = error.error.error;
      this.registerError.next(this.errorMessage);
      console.log(this.errorMessage);
    })
  }
}
