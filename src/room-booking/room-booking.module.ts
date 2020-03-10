import { Module } from '@nestjs/common';
import { RoomBookingController } from './room-booking.controller';
import { RoomBookingService } from './room-booking.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { RoomBooking } from './models/room-booking.model';
import { RoomsModule } from '../rooms/rooms.module';

@Module({
  imports: [
    SequelizeModule.forFeature([RoomBooking]),
    RoomsModule
  ],
  controllers: [RoomBookingController],
  providers: [RoomBookingService]
})
export class RoomBookingModule {}
