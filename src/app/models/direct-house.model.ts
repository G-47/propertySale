export class DirectHouse {
  _id: string;
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
  ownerId: string;
}
