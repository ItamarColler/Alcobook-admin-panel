import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection = new Subject<Comment>();
  private users : User[] = [
    new User("David", "Admin",4,5,6),
    new User("David 1","User",4,5,8),
    new User("David 2", "Admin",2,4,7),
    new User("David 3", "User",2,3,7)
  ]
  constructor() { }

  getUsers()
  {
    return this.users.slice();
  }
  getUser(index : number)
  {
    return this.users[index];
  }
}
