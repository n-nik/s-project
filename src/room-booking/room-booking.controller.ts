import { Body, Controller, NotFoundException, Param, Post, UnprocessableEntityException } from '@nestjs/common';
import { CreateBookingBody } from './dto/createBookingBody';
import { RoomBookingDto } from './dto/roomBookingDto';
import { ResponseModel } from '../common/interfaces/responses.model';
import { RoomsService } from '../rooms/rooms.service';
import { CreateBookingPathParams } from './dto/createBookingPathParams';
import { Room } from '../rooms/models/room.model';
import { RoomBookingService } from './room-booking.service';

@Controller()
export class RoomBookingController {
  constructor(private readonly roomBookingService: RoomBookingService,
              private readonly roomsService: RoomsService
  ) {}

  @Post('rooms/:roomId/booking')
  async createBooking(@Param() params: CreateBookingPathParams,
                      @Body() body: CreateBookingBody
  ): Promise<ResponseModel<RoomBookingDto>> {

    /* TODO add validation of max, min dates, startDate must be less than endDate */

    const room: Room = await this.roomsService.getById(params.roomId);
    if (!room) {
      throw new NotFoundException('Room not found')
    }

    const bookedRoomsCount = await this.roomBookingService
      .getBookedRoomsCount(params.roomId, body.startDate, body.endDate);

    if (bookedRoomsCount >= room.capacity) {
      throw new UnprocessableEntityException('Room not available')
    }

    const booking = await this.roomBookingService.createBooking(params.roomId, body);

    return {
      data: new RoomBookingDto(booking)
    }

  }

}
