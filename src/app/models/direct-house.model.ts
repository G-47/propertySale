export class DirectHouse {
  title: string;
  description: string;
  bedRooms: number;
  bathRooms: number;
  price: number;
  locationName: string;
  locationMap: {
    lat: number;
    lng: number;
  };
  images: string[];
  isFromOwner: boolean;
  status: number;
  postedTime: number;
}
