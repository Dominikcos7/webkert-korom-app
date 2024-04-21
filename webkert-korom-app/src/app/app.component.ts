import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'webkert-korom-app';
  loggedInUser?: firebase.default.User | null;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.getUser().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

  logout() {
    this.auth.logout();
  }
}
