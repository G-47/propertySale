
export class AuctionLandAd {
    _id: string;    
    title: string;
    type: string;
    size: string;
    description: string;
    threeSixtyImageUrl: string;
    images: string[];
    locationName: string;
    locationMap: {
      lat: number;
      lng: number;
    };
    startDate: number;
    endDate: number;
    startBid: number;
    postedTime: number;
  }