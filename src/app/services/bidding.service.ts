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

  newBid = {} as Bidding;

  constructor(private http:HttpClient) { }

  getBids(): Observable<Bidding[]> {
    return this.http.get<Bidding[]>(this.getAllBids_url);
  }

  addBid(formData): any {
    this.newBid.adID = formData.adID;
    this.newBid.userID = formData.userID;
    this.newBid.biddingAmount = formData.biddingAmount;
    this.newBid.type = formData.type;

    return this.http.post<any>(this.insertBid_url, this.newBid);
  }
}
