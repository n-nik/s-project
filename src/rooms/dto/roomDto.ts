import { Room } from '../models/room.model'

export class RoomDto {
  id: string;
  capacity: number;
  price: number;
  bookedRoomCount?: number;
  isAvailable?: boolean;

  constructor(item: Room) {
    this.id = item.id;
    this.capacity = item.capacity;
    this.price = item.price;
    if (item.get('bookedRoomCount') !== undefined) {
      this.bookedRoomCount = Number(item.get('bookedRoomCount'));
      this.isAvailable = this.bookedRoomCount < this.capacity;
    }
  }
}
