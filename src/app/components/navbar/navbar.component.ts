import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged = false;

  constructor() {}

  ngOnInit(): void {
    console.log(localStorage.getItem('token'));

    setInterval(() => {
      this.isLogged = localStorage.getItem('token') !== null;
    }, 500);
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
