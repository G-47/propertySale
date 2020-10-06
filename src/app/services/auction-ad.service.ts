import { Injectable } from '@angular/core';
import { AuctionLandAd } from '../models/auctionLandAd.model';
import { AuctionHouseAd } from '../models/auctionHouseAd.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuctionAdService {

  adLand = {} as AuctionLandAd;
  adHouse = {} as AuctionHouseAd;

  private getAuctionLandAd_url = 'http://localhost:3000/api/getAllLandAds';

  constructor(private http:HttpClient) {}

  setSelectedLandAd(arr){
    this.adLand = arr;
  }

  getSelectedLandAd (){
    return this.adLand;
  }

  setSelectedHouseAd(arr){
    this.adHouse = arr;
  }

  getSelectedHouseAd (){
    return this.adHouse;
  }

  getAuctionLandAd(): Observable<AuctionLandAd[]> {
    return this.http.get<AuctionLandAd[]>(this.getAuctionLandAd_url);
  }
}
