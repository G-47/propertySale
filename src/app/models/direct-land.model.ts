export class DirectLand {
  _id: string;
  title: string;
  description: string;
  type: string;
  size: number;
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
