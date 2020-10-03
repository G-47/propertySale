import { Injectable } from '@angular/core';
import { AuctionAd } from '../models/auctionAd.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionAdService {

  ad = {} as AuctionAd;
  constructor() { }
  setAd(arr){
    this.ad = arr;
  }

  getSelectedAd (){
    return this.ad;
  }
}
