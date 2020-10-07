import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../../interfaces/auctionProperty';
import { from, Observable } from 'rxjs';
import { Property } from '../../models/auctionproperty';

@Injectable({
  providedIn: 'root',
})
export class AuctionService {
  private postProperty_url = 'http://localhost:3000/api/postAuctionProperty';

  constructor(private http: HttpClient) {}

  newProperty = {} as Property;

  intercept(req, next) {
    const tokanizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return next.handle(tokanizedReq);
  }

  addProperty(formData) {
    this.newProperty.title = formData.title;
    this.newProperty.startBid = formData.startBid;
    this.newProperty.interval = formData.interval;
    this.newProperty.size = formData.size;
    this.newProperty.type = formData.type;
    this.newProperty.location = formData.location;
    this.newProperty.startDate = formData.startDate;
    this.newProperty.endDate = formData.endDate;
    this.newProperty.description = formData.description;
    this.newProperty.image =
      'https://ikonmania.files.wordpress.com/2014/03/large-1.jpg';

    return this.http.post<any>(this.postProperty_url, this.newProperty);
  }
}
