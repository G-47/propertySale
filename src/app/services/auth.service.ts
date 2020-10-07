import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements HttpInterceptor {
  private registerUrl = 'http://localhost:3000/api/registerUser';
  private loginUrl = 'http://localhost:3000/api/authenticateUser';
  private getUserUrl = 'http://localhost:3000/api/getUser';

  constructor(private http: HttpClient) {}

  currentUser: User;

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
    const observable = this.http.post<any>(this.loginUrl, formData);
    const promise = observable.toPromise();

    return new Promise((resolve, reject) => {
      const returnObject = promise.then(
        (res) => {
          localStorage.setItem('token', res.token);
          this.http
            .get(this.getUserUrl)
            .toPromise()
            .then(
              (resUser: { user: any }) => {
                localStorage.setItem(
                  'currentUser',
                  JSON.stringify(resUser.user)
                );
              },
              (errUser) => {
                localStorage.clear();
                console.log(errUser);
              }
            );
          return { status: true };
        },
        (err) => {
          console.log(err.error.message);
          return { error: err.error.message, status: false };
        }
      );
      setTimeout(() => {
        resolve(returnObject);
      }, 500);
    });
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
