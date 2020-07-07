import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { User } from './../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage = 'temp';
  successMessage = 'temp';

  LoginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  tryLogin(formData) {
    this.authService.login(formData).subscribe(
      async (res) => {
        await localStorage.setItem('token', res.token);
        this.errorMessage = 'temp';
        this.router.navigate(['/home']);

        // this.getCurrentUser();
      },
      (err) => {
        this.errorMessage = err.error.message;
        console.log(err.error.message);
      }
    );
  }

  ngOnInit(): void {}
}
