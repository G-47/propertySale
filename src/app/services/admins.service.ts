import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdmins } from '../interfaces/admin';
import { from, Observable, of } from 'rxjs';
import { Message } from '../models/message.model';
import { Admin } from '../models/admin.model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminsService {
  constructor(private http: HttpClient) {}

  private getAdmins_url = 'http://localhost:3000/api/getAdmins';
  private addAdmins_url = 'http://localhost:3000/api/registerAdmin';
  private composemsg_url = 'http://localhost:3000/api/postMessage';
  private removeadmin_url = 'http://localhost:8080/sms/api/removeAdmin';

  newadmin = {} as Admin;

  intercept(req, next): any {
    const tokanizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return next.handle(tokanizedReq);
  }

  message = {} as Message;

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.getAdmins_url);
  }

  addAdmin(formData): any {
    this.newadmin.name = formData.name;
    this.newadmin.email = formData.email;
    this.newadmin.picture =
      'http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg';

    return this.http.post<any>(this.addAdmins_url, this.newadmin);
  }

  removeadmin(id: string) {
    return this.http.delete<IAdmins>(this.removeadmin_url + '/' + id);
  }

  composeMsg(formData,id:string) {
    this.message.adminId = id;
    this.message.message = formData.message;
    this.message.name = formData.name;
    return this.http.post<any>(this.composemsg_url, this.message);
  }
}
