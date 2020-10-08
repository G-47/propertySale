import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emailSendUrl = 'http://localhost:3000/api/sendEmail';

  constructor(private http: HttpClient) {}

  sendEmail(email: string, subject: string, message: string): Promise<any> {
    console.log({ email, message, subject });
    return this.http
      .post<any>(this.emailSendUrl, { email, subject, message })
      .toPromise();
  }
}
