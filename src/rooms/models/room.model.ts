import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { Location } from '../../locations/models/location.model';
import { RoomType } from '../interfaces/room.interface';

@Table
export class Room extends Model<Room> {
  @Column({
    type: DataType.ENUM(
      RoomType.Dorm,
      RoomType.Private,
      RoomType.Deluxe
    ),
  })
  type: RoomType;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 10,
  })
  totalQuantity: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 10,
  })
  freeQuantity: number;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER
  })
  locationId: number
}
