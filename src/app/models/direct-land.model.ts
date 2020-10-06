export class DirectLand {
  title: string;
  description: string;
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
}
