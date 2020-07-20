import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdmins } from '../interfaces/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminsService {
  private getAdmins_url = 'http://localhost:3000/api/getAdmins';

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<IAdmins[]> {
    return this.http.get<IAdmins[]>(this.getAdmins_url);
  }
}
