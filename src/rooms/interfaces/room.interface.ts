export enum RoomType {
  Dorm = 'DORM',
  Private = 'PRIVATE',
  Deluxe = 'DELUXE',
}

export interface Room {
  type: RoomType;
  price: number;
  totalQuantity: number;
  freeQuantity: number;
  locationId: number;
}
