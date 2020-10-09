import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminsService } from 'src/app/services/admins.service';
import { EmailService } from 'src/app/services/email.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss'],
})
export class NewAdminComponent implements OnInit {
  errorMessage = 'temp';
  successMessage = 'temp';
  AddAdmin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private adminService: AdminsService,
    private emailService: EmailService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  addDataToAdmin(formData) {
    var formDetails1 = {
      email: formData.email,
      name: formData.name,
      picture: '',
    };

    this.adminService.addAdmin(formDetails1).subscribe(
      (res) => {
        console.log('success');
      },
      (err) => {
        this.errorMessage = err.error[0];
        console.log(err.error[0]);
      }
    );
  }

  addData(formData) {
    this.addDataToAdmin(formData);
    var formDetails = {
      email: formData.email,
      firstName: formData.name,
      profilePicture: '',
      lastName: '',
      mobileNumber: '',
      nicNumber: '',
      nicFrontImage: '',
      nicBackImage: '',
      password: 'admin123',
      userType: 1,
      status: 1,
    };

    console.log(formDetails);

    this.authService.register(formDetails).subscribe(
      (res) => {
        this.toastr.success('Addign an admin', 'Addes successfully');
        this.sendEmail(
          formDetails.email,
          'Welcome ' +
            formDetails.firstName +
            'as new admin to Lanka Properties',
          ' Hello ' +
            formDetails.firstName +
            '\n' +
            ' ' +
            ' Here we are welcome you as a new admin for lanka properties. You can now log into system by your email'
        );
        this.router.navigate(['/manager']);
        this.AddAdmin.reset();
      },
      (err) => {
        this.errorMessage = err.error[0];
        console.log(err.error[0]);
      }
    );
  }

  // Sending email to admin
  sendEmail(tomail, subject, message): void {
    this.emailService.sendEmail(tomail, subject, message);
    console.log('Mail sent');
  }

  ngOnInit(): void {}
}
