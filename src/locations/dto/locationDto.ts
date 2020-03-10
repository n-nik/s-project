import { Location } from '../models/location.model';

export class LocationDto {
  id: string;
  country: string;
  city: string;

  constructor(location: Location) {
    this.id = location.id;
    this.country = location.country;
    this.city = location.city;
  }
}
