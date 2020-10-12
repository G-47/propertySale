import { Injectable } from '@angular/core';
import { AuctionLandAd } from '../models/auctionLandAd.model';
import { AuctionHouseAd } from '../models/auctionHouseAd.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuctionAdService implements HttpInterceptor {
  adLand = {} as AuctionLandAd;
  adHouse = {} as AuctionHouseAd;

  private getAuctionLandAd_url = 'http://localhost:3000/api/getAllLandAds';
  private getAuctionHouseAd_url = 'http://localhost:3000/api/getAllHouseAds';
  private postAuctionLandAd_url = 'http://localhost:3000/api/addAuctionLandAd';
  private postAuctionHouseAd_url =
    'http://localhost:3000/api/addAuctionHouseAd';

  private getEndedLandBids_url = 'http://localhost:3000/api/getEndedLandBids';
  private getEndedHouseBids_url = 'http://localhost:3000/api/getEndedHouseBids';

  constructor(private http: HttpClient) {}

  intercept(req, next): any {
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return next.handle(tokenizedReq);
  }

  setSelectedLandAd(arr) {
    this.adLand = arr;
  }

  getSelectedLandAd() {
    return this.adLand;
  }

  setSelectedHouseAd(arr) {
    this.adHouse = arr;
  }

  getSelectedHouseAd() {
    return this.adHouse;
  }

  getAuctionLandAd(): Observable<AuctionLandAd[]> {
    return this.http.get<AuctionLandAd[]>(this.getAuctionLandAd_url);
  }

  getAuctionHouseAd(): Observable<AuctionHouseAd[]> {
    return this.http.get<AuctionHouseAd[]>(this.getAuctionHouseAd_url);
  }

  getEndedLandBids(): Promise<AuctionLandAd[]> {
    return this.http
      .get<AuctionLandAd[]>(this.getEndedLandBids_url)
      .toPromise();
  }

  getEndedHouseBids(): Promise<AuctionHouseAd[]> {
    return this.http
      .get<AuctionHouseAd[]>(this.getEndedHouseBids_url)
      .toPromise();
  }

  postAuctionLand(landDetails: AuctionLandAd): Promise<any> {
    return this.http
      .post<any>(this.postAuctionLandAd_url, landDetails)
      .toPromise();
  }

  postAuctionHouse(houseDetails: AuctionHouseAd): Promise<any> {
    return this.http
      .post<any>(this.postAuctionHouseAd_url, houseDetails)
      .toPromise();
  }
}
