import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class AuctionAd {
    _id: string;    
    name: String;
    type: String;
    size: String;
    description: String;
    threeSixtyImageUrl: String;
    extracts: Array<String>;
    otherImages: Array<String>;
    location: String;
    mapCordinates: Object;
    startDate: Date;
    endDate: Date;
    startBid: String;
  }