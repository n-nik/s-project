import { Column, ForeignKey, Model, Scopes, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { Location } from '../../locations/models/location.model';
import { RoomType } from '../interfaces/room.interface';
import { CommonScopes } from '../../common/models/commonScopes';

@Scopes(() => ({
  pagination: CommonScopes.getPaginationScope(),
}))
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
  capacity: number;

  @Column({
    type: DataType.DECIMAL(7, 2),
  })
  price: number;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER
  })
  locationId: number
}
