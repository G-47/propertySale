import { DirectHouse } from './../models/direct-house.model';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DirectLand } from '../models/direct-land.model';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService implements HttpInterceptor {
  private postDirectLandUrl = 'http://localhost:3000/api/addDirectLand';
  private postDirectHouseUrl = 'http://localhost:3000/api/addDirectHouse';

  private getDirectLandsUrl = 'http://localhost:3000/api/getDirectLands';
  private getDirectHousesUrl = 'http://localhost:3000/api/getDirectHouses';

  private acceptDirectLandsUrl = 'http://localhost:3000/api/acceptDirectLand';
  private acceptDirectHousesUrl = 'http://localhost:3000/api/acceptDirectHouse';

  constructor(private http: HttpClient) {}

  intercept(req, next): any {
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return next.handle(tokenizedReq);
  }

  postDirectLand(landDetails: DirectLand): Promise<any> {
    return this.http.post<any>(this.postDirectLandUrl, landDetails).toPromise();
  }

  postDirectHouse(houseDetails: DirectHouse): Promise<any> {
    return this.http
      .post<any>(this.postDirectHouseUrl, houseDetails)
      .toPromise();
  }

  getDirectHouses(status: number): Promise<DirectHouse[]> {
    return this.http
      .post<any>(this.getDirectHousesUrl, { status })
      .toPromise();
  }

  getDirectLands(status: number): Promise<DirectLand[]> {
    return this.http
      .post<any>(this.getDirectLandsUrl, { status })
      .toPromise();
  }

  acceptDirectLand(id: string): Promise<DirectLand> {
    return this.http
      .put<any>(this.acceptDirectLandsUrl, { id })
      .toPromise();
  }
}
