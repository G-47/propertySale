import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
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

  tryLogin(formData): void {
    const x = this.authService.login(formData);
    console.log(x);
    x.then(
      (res) => {
        console.log(res);
        if (res.status) {
          this.errorMessage = 'temp';
          this.router.navigate(['/home']);
        } else {
          this.errorMessage = res.error;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
}
