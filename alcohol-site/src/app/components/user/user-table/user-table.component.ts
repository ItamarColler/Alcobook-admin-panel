import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  users: User[];
  userView: string[] = ['Name','Role','Cocktails','Likes','Comments',"Details"];
  ingridientData: number;
  index: number;
  constructor(private userService: UserService, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    // this.users = this.userService.getUsers();

  }

}
// private _id:string,
// private name: string,
// private role: string,
// private cocktails: number,
// private comments: number,
// private likes: number