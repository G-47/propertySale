import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bidding } from 'src/app/models/bidding.model'

@Injectable({
  providedIn: 'root'
})
export class BiddingService {

  private getAllBids_url = 'http://localhost:3000/api/getAllBids';
  private insertBid_url = 'http://localhost:3000/api/insertBid';
  private getUser_bid_url = 'http://localhost:3000/api/getData';
  private insertUser_bid_url = 'http://localhost:3000/api/insertData';

  newBid = {} as Bidding;

  constructor(private http:HttpClient) { }

  getBids(adID): Observable<Bidding[]> {
    this.newBid.adID = adID
    return this.http.post<Bidding[]>(this.getAllBids_url,this.newBid);
  }

  addBid(formData): any {
    this.newBid.adID = formData.adID;
    this.newBid.userID = formData.userID;
    this.newBid.biddingAmount = formData.biddingAmount;
    this.newBid.type = formData.type;

    return this.http.post<any>(this.insertBid_url, this.newBid);
  }

  getUser_bids(adID,userID): Observable<Bidding[]> {
    this.newBid.adID = adID
    this.newBid.userID = userID
    return this.http.post<Bidding[]>(this.getUser_bid_url,this.newBid);
  }

  addUser_bids(adID,userID,type): any {
    this.newBid.adID = adID;
    this.newBid.userID = userID;
    this.newBid.type = type;

    return this.http.post<any>(this.insertUser_bid_url, this.newBid);
  }

}
