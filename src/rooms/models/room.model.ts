import { Column, ForeignKey, Model, Scopes, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { Location } from '../../locations/models/location.model';
import { RoomType } from '../interfaces/room.interface';
import { CommonScopes } from '../../common/models/commonScopes';
import { literal } from 'sequelize';

@Scopes(() => ({
  pagination: CommonScopes.getPaginationScope(),

  filterByLocation: (locationId: number) => ({
    where: { locationId }
  }),

  withBookedCount: (startDate: string, endDate: string) => {
    return {
      attributes: {
        include: [
          [literal(`
            (SELECT COUNT(*) FROM \`RoomBookings\` as rb
              WHERE 
              rb.roomId = \`Room\`.\`id\` 
              AND (rb.startDate BETWEEN '${startDate}' AND '${endDate}')
              AND (rb.endDate BETWEEN '${startDate}' AND '${endDate}'))
          `.replace(/\s+/g, ' ')), 'bookedRoomCount']
        ]
      }
    }
  }
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
