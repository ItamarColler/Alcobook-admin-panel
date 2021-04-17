import { Component, Input, OnInit } from '@angular/core';
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
  showInput:number;
  userEdit=false;
  @Input() userObj={
    userName:'', userRole:''
  }
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
        console.log(element);
        user = new User(
          element._id,
          element.username,
          element.role,
          element.token
        );
        this.data.push(user);
      });
    });
  }
  editEnable()
  {
    this.userEdit=!this.userEdit;
  }
  editUser(id: string)
  {
    this.userService.updateName(this.userObj.userName,id);
    this.userService.updateRole(this.userObj.userRole,id);
  }
  editTest(){
    console.log(this.userObj.userName);
  }
  private onSelected(id: string) {
    this.userService.currentUserId.next(id);
  }
  updateIndex( i: number){
    this.userObj.userName="";
    this.userObj.userRole="";
    this.showInput=i;

  }
  getInputIndex(){
    return this.showInput;
  }
}
