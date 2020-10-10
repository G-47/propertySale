import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private AuthService: AuthService) {
    var user = new User();
    user = AuthService.getCurrentUser();
    this.profileImage = user.profilePicture;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.mobileNumber = user.mobileNumber;
    this.nic = user.nicNumber;
  }

  profileImage;
  firstName;
  lastName;
  email;
  mobileNumber;
  nic;

  ngOnInit() {}
}
