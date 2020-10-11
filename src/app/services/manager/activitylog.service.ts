import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';
import { Activitylog } from '../../models/activitylog.model';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ActivitylogService {
  constructor(private http: HttpClient) {}

  private getActivitylog_url = 'http://localhost:3000/api/getActivityLog';

  newactivity = {} as Activitylog;

  intercept(req, next): any {
    const tokanizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return next.handle(tokanizedReq);
  }

  getActivities(): Observable<Activitylog[]> {
    return this.http.get<Activitylog[]>(this.getActivitylog_url);
  }
}
