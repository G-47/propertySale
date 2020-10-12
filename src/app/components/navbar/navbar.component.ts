import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));

    setInterval(() => {
      this.isLogged = localStorage.getItem('token') !== null;
      if (this.currentUser == null) {
        this.currentUser = this.authService.getCurrentUser();
        console.log(this.currentUser);
      }
    }, 500);
  }

  logOut(): void {
    localStorage.clear();
    this.currentUser = null;
    location.reload();
  }

  gotoDashboard(): void {
    switch (this.currentUser.userType) {
      case 0:
        this.router.navigate(['/userDashboard']);
        break;

      case 1:
        this.router.navigate(['/adminDashboard']);
        break;

      case 2:
        this.router.navigate(['/managerDashboard']);
        break;
    }
  }
}
