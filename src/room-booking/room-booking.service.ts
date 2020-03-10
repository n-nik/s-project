import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RoomBooking } from './models/room-booking.model';
import { Op } from 'sequelize';
import { CreateBookingBody } from './dto/createBookingBody';

@Injectable()
export class RoomBookingService {
  constructor(
    @InjectModel(RoomBooking) private readonly RoomBookingModel: typeof RoomBooking
  ) {}

  async getBookedRoomsCount(roomId: number, startDate: string, endDate: string): Promise<number> {
    return this.RoomBookingModel.count({
      where: {
        roomId,
        [Op.or]: {
          startDate: {
            [Op.between]: [startDate, endDate]
          },
          endDate: {
            [Op.between]: [startDate, endDate]
          },
        }
      }
    });
  }

  async createBooking(roomId: number, body: CreateBookingBody): Promise<RoomBooking> {
    return this.RoomBookingModel.create({
      roomId,
      startDate: body.startDate,
      endDate: body.endDate
    });
  }
}
