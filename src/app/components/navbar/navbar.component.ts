import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  currentUser: User = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));

    setInterval(() => {
      this.isLogged = localStorage.getItem('token') !== null;
      if (this.currentUser == null) {
        this.currentUser = this.authService.getUser();
        console.log(this.currentUser);
      }
    }, 500);
  }

  logOut(): void {
    localStorage.clear();
    this.currentUser = null;
  }
}
