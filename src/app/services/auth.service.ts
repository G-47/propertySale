import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements HttpInterceptor {
  constructor(private http: HttpClient) {}

  intercept(req, next) {
    const tokanizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return next.handle(tokanizedReq);
  }

  private registerUrl = 'http://localhost:3000/api/registerUser';
  private loginUrl = 'http://localhost:3000/api/authenticateUser';

  newUser = {} as User;

  register(formData) {
    this.newUser.firstName = formData.firstName;
    this.newUser.lastName = formData.lastName;
    this.newUser.email = formData.email;
    this.newUser.nic = formData.nic;
    this.newUser.password = formData.password;

    return this.http.post<any>(this.registerUrl, this.newUser);
  }

  login(formData) {
    return this.http.post<any>(this.loginUrl, formData);
  }
}
