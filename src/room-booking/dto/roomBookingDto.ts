import { RoomBooking } from '../models/room-booking.model'

export class RoomBookingDto {
  id: string;
  startDate: Date;
  endDate: Date;

  constructor(item: RoomBooking) {
    this.id = item.id;
    this.startDate = item.startDate;
    this.endDate = item.endDate;
  }
}
