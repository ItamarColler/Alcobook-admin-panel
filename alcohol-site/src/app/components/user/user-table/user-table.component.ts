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
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  data: User[];
  userView: string[] = [
    'Name',
    'Role',
    'Details',
  ];

  constructor(private userService: UserService, private router: Router) {
    this.data = new Array<any>();
  }

  ngOnInit(): void {
    this.getUsers();
  }
  private getUsers() {
    var user: User = null;
    this.userService.getUsers().subscribe((data) => {
      data.forEach((element: any) => {
        user = new User(
          element.username,
          element._id,
          element.role,
          element.token
        );
        this.data.push(user);
      });
    });
  }
  private onSelected(id: string) {
    this.userService.currentUserId.next(id);
  }
}
