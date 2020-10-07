import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService implements HttpInterceptor {
  private emailSendUrl = 'http://localhost:3000/api/sendEmail';

  constructor(private http: HttpClient) {}

  intercept(req, next): any {
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return next.handle(tokenizedReq);
  }

  sendEmail(email: string, subject: string, message: string): Promise<any> {
    console.log({ email, message, subject });
    return this.http
      .post<any>(this.emailSendUrl, { email, subject, message })
      .toPromise();
  }
}
