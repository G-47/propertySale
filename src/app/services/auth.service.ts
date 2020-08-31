import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements HttpInterceptor {
  private registerUrl = 'http://localhost:3000/api/registerUser';
  private loginUrl = 'http://localhost:3000/api/authenticateUser';

  constructor(private http: HttpClient) {}

  intercept(req, next): any {
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return next.handle(tokenizedReq);
  }

  register(formData): any {
    let newUser: User;
    newUser = formData as User;

    return this.http.post<any>(this.registerUrl, newUser);
  }

  login(formData): any {
    return this.http.post<any>(this.loginUrl, formData);
  }
}
