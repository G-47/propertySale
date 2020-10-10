import { CustomValidationService } from './../../services/custom-validation.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  errorMessage = 'temp';
  successMessage = 'temp';

  RegisterForm = this.formBuilder.group({
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
    nicFrontImage: ['', Validators.required],
    nicBackImage: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private customValidationService: CustomValidationService
  ) {}

  ngOnInit(): void {}

  setProfilePicture(url): void {
    this.RegisterForm.controls.profilePicture.setValue(url);
    console.log('profile picture is : ' + url);
  }
  setNicFrontImage(url): void {
    this.RegisterForm.controls.nicFrontImage.setValue(url);
    console.log('NIC front image is : ' + url);
    console.log(this.RegisterForm.controls);
  }
  setNicBackImage(url): void {
    this.RegisterForm.controls.nicBackImage.setValue(url);
    console.log('NIC back image is : ' + url);
  }

  tryRegister(formData): void {
    this.authService
      .register({ ...formData, userType: 0, status: 0 })
      .subscribe(
        () => {
          this.toastr.success('Login now', 'Registered Successfully');
          this.router.navigate(['/login']);
          this.RegisterForm.reset();
        },
        (err) => {
          this.errorMessage = err.error[0];
          console.log(err.error[0]);
        }
      );
  }
}
