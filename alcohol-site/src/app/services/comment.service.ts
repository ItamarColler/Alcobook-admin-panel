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
    this.http.get<Comment>(this.commentUrl)
  }


}
