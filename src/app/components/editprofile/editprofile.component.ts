import { Component, OnInit } from '@angular/core';

import { EmailService } from './../../services/email.service';
import { CustomValidationService } from './../../services/custom-validation.service';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

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
    private customValidationService: CustomValidationService,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
  }

  setProfilePicture(url): void {
    this.RegisterForm.controls.profilePicture.setValue(url);
    console.log('profile picture is : ' + url);
  }
  
}

