import { Component, OnInit } from '@angular/core';

import { EmailService } from './../../services/email.service';
import { CustomValidationService } from './../../services/custom-validation.service';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { UserCardComponent } from '../cards/user-card/user-card.component';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss'],
})
export class EditprofileComponent implements OnInit {
  errorMessage = 'temp';
  successMessage = 'temp';

  UpdateForm = this.formBuilder.group({
    profilePicture: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobileNumber: [
      '',
      Validators.compose([
        Validators.required,
        this.customValidationService.patternValidator(),
      ]),
    ],
    email: ['', [Validators.required, Validators.email]],
    nicNumber: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private customValidationService: CustomValidationService,
    private emailService: EmailService
  ) {}

  user: User;

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.UpdateForm.controls.profilePicture.setValue(this.user.profilePicture);
    this.UpdateForm.controls.firstName.setValue(this.user.firstName);
    this.UpdateForm.controls.lastName.setValue(this.user.lastName);
    this.UpdateForm.controls.mobileNumber.setValue(this.user.mobileNumber);
  }

  setProfilePicture(url): void {
    this.UpdateForm.controls.profilePicture.setValue(url);
    console.log('profile picture is : ' + url);
  }

  updateUser(newData: User): void {
    this.authService.updateUser(newData).then(
      (res) => {
        this.toastr.success('', 'Updated Successfully');
        localStorage.setItem('currentUser', JSON.stringify(res));
        location.reload();
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  gotoDashboard(): void {
    switch (this.user.userType) {
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
