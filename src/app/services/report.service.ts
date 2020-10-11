import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private reportUrl = 'http://localhost:3000/api/report';

  constructor(private http: HttpClient) {}

  getReport(content: string): Promise<any> {
    return this.http
      .post<any>(this.reportUrl, { content })
      .toPromise();
  }
}
