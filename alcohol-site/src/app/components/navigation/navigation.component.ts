import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'alcohol-site';

  constructor() { }

  ngOnInit(): void {
    var systemToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlN5c3RlbSIsImlkIjoiNjA3NmMzZTRkMTQ1ZGY1OTEwYTcwYWM4IiwiZXhwIjoxNjIzODU2MTIyLCJpYXQiOjE2MTg2NzIxMjJ9.BGZcTZj3u8s_ZY4kDkieZvY0NlQpiHiTYrrnOuVhRbs";
    localStorage.setItem('token', systemToken);
  }

}
