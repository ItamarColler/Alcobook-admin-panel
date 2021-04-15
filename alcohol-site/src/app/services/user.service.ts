import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection = new Subject<Comment>();
  private users : User[] = [
    new User("443","David", "Admin",4,5,6),
    new User("123","David 1","User",4,5,8),
    new User("234","David 2", "Admin",2,4,7),
    new User("566","David 3", "User",2,3,7)
  ]
  constructor() { }

  getUsers()
  {
    return this.users.slice();
  }
  getUser(index : number)
  {
    return this.users.slice()[index];
  }
  getUserLength()
  {
    return this.users.length;
  }
}
