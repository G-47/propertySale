export class AuctionHouseAd {
    _id: string;    
    title: string;
    description: string;
    images: string[];
    locationName: string;
    locationMap: {
      lat: number;
      lng: number;
    };
    startDate: number;
    endDate: number;
    startBid: number;
    bedRooms: number;
    bathRooms: number;
    postedTime: number;    
  }