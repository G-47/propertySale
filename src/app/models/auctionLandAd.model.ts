
export class AuctionLandAd {
    _id: string;    
    title: String;
    type: String;
    size: String;
    description: String;
    threeSixtyImageUrl: String;
    images: String[];
    locationName: String;
    locationMap: {
      lat: number;
      lng: number;
    };
    startDate: Number;
    endDate: Number;
    startBid: Number;
    postedTime: Number;
  }