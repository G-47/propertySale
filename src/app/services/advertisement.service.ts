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
import { BidedProperty } from '../models/bided-property.model';
import { AuctionHouseAd } from '../models/auctionHouseAd.model';
import { AuctionLandAd } from '../models/auctionLandAd.model';

@Injectable({
  providedIn: 'root',
})
export class AdvertisementService implements HttpInterceptor {
  private postDirectLandUrl = 'http://localhost:3000/api/addDirectLand';
  private postDirectHouseUrl = 'http://localhost:3000/api/addDirectHouse';

  private getDirectLandsUrl = 'http://localhost:3000/api/getDirectLands';
  private getDirectHousesUrl = 'http://localhost:3000/api/getDirectHouses';

  private acceptOrDeleteDirectLandUrl =
    'http://localhost:3000/api/acceptOrDeleteDirectLand';
  private acceptOrDeleteDirectHouseUrl =
    'http://localhost:3000/api/acceptOrDeleteDirectHouse';

  private getLandsByUserId = 'http://localhost:3000/api/getLandsByUserId';
  private getHousesByUserId = 'http://localhost:3000/api/getHousesByUserId';

  private getLandByIdUrl = 'http://localhost:3000/api/getLandById';
  private getHouseByIdUrl = 'http://localhost:3000/api/getHouseById';

  private getBidedPropertyIdsByUserId =
    'http://localhost:3000/api/getBidedPropertyIds';

  private getBidedLandAds = 'http://localhost:3000/api/getBidedLands';
  private getBidedHousesAds = 'http://localhost:3000/api/getBidedHouses';

  private deleteLandUrl = 'http://localhost:3000/api/deleteLand';
  private deleteHouseUrl = 'http://localhost:3000/api/deleteHouse';

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

  acceptOrDeleteDirectLand(id: string, status: number): Promise<DirectLand> {
    return this.http
      .put<any>(this.acceptOrDeleteDirectLandUrl, { id, status })
      .toPromise();
  }

  acceptOrDeleteDirectHouse(id: string, status: number): Promise<DirectHouse> {
    return this.http
      .put<any>(this.acceptOrDeleteDirectHouseUrl, { id, status })
      .toPromise();
  }

  getLandstoUserId(): Promise<DirectLand[]> {
    return this.http.get<any>(this.getLandsByUserId).toPromise();
  }

  getHousestoUserId(): Promise<DirectHouse[]> {
    return this.http.get<any>(this.getHousesByUserId).toPromise();
  }

  getLandById(id: string): Promise<DirectLand> {
    return this.http
      .post<any>(this.getLandByIdUrl, { id })
      .toPromise();
  }

  getHouseById(id: string): Promise<DirectHouse> {
    return this.http
      .post<any>(this.getHouseByIdUrl, { id })
      .toPromise();
  }

  getBidedPropertyIds(type: string): Promise<any> {
    return this.http
      .post<any>(this.getBidedPropertyIdsByUserId, { type })
      .toPromise();
  }

  getBidedLands(ids: string[]): Promise<AuctionLandAd[]> {
    return this.http
      .post<any>(this.getBidedLandAds, { ids })
      .toPromise();
  }

  getBidedHouses(ids: string[]): Promise<AuctionHouseAd[]> {
    return this.http
      .post<any>(this.getBidedHousesAds, { ids })
      .toPromise();
  }
  deleteLand(id: string): Promise<any> {
    return this.http.delete<any>(this.deleteLandUrl + '/' + id).toPromise();
  }
  deleteHouse(id: string): Promise<any> {
    return this.http.delete<any>(this.deleteHouseUrl + '/' + id).toPromise();
  }
}
