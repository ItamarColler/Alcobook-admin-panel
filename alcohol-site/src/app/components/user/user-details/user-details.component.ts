import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  selectedUser: User;
  error = null;
  currentUserId = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }
  private getCurrentUser() {
    this.userService.currentUserId.subscribe((user) => {
      this.currentUserId = user;
    });
  }
  displayUser() {
    this.userService.getUser().subscribe((data) => {
      console.log(data);
      this.selectedUser = new User(
        data._id,
        data.username,
        data.role,
        data.token
      );
    });
  }
}
