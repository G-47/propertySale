import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdmins } from '../interfaces/admin';
import { from, Observable } from 'rxjs';
import { Message } from '../models/message.model';
import { Admin } from '../models/admin.model'


@Injectable({
  providedIn: 'root',
})
export class AdminsService {
  private getAdmins_url = 'http://localhost:3000/api/getAdmins';
  private addAdmins_url = 'http://localhost:3000/api/registerAdmin';
  private composemsg_url = 'http://localhost:3000/api/postMessage';

  constructor(private http: HttpClient) {}

  intercept(req, next) {
    const tokanizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return next.handle(tokanizedReq);
  }

  newadmin = {} as Admin;
  message = {} as Message;

  getAdmins(): Observable<IAdmins[]> {
    return this.http.get<IAdmins[]>(this.getAdmins_url);
  }

  addAdmin(formData) {
    this.newadmin.name = formData.name;
    this.newadmin.email = formData.email;
    this.newadmin.picture = "https://ikonmania.files.wordpress.com/2014/03/large-1.jpg"

    return this.http.post<any>(this.addAdmins_url, this.newadmin);
  }
  
  composeMsg(formData){
    this.message.adminId = "djsnj";
    this.message.message = formData.message;
    this.message.name = formData.name;
    return this.http.post<any>(this.composemsg_url, this.message);
  }
}
