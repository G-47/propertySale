export class AuctionHouseAd {
    _id: string;    
    title: String;
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
    bedrRooms: number;
    bathRooms: number;
  }