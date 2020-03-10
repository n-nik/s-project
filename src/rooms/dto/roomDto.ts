import { Room } from '../models/room.model'

export class RoomDto {
  id: string;
  capacity: number;
  price: number;

  constructor(item: Room) {
    this.id = item.id;
    this.capacity = item.capacity;
    this.price = item.price;
  }
}
