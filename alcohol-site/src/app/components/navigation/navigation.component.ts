import { UserService } from 'src/app/services/user.service';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'alcohol-site';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    localStorage.setItem('token', this.userService.setToken());
  }

}
