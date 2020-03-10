import { Column, ForeignKey, Model, Scopes, Table } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';
import { Room } from '../../rooms/models/room.model'
import { CommonScopes } from '../../common/models/commonScopes';


@Scopes(() => ({
  pagination: CommonScopes.getPaginationScope(),
}))
@Table
export class RoomBooking extends Model<RoomBooking> {

  @ForeignKey(() => Room)
  @Column({
    type: DataType.INTEGER
  })
  roomId: number;

  @Column({
    type: DataType.DATE
  })
  startDate: Date;

  @Column({
    type: DataType.DATE
  })
  endDate: Date;
}
