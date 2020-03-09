import { Controller, Get, Param } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Room } from './models/room.model';

@Controller()
export class RoomsController {

  constructor(private readonly roomsService: RoomsService) {

  }

  @Get('locations/:locationId/rooms')
  async getList(@Param() params): Promise<Room[]>{
    return await this.roomsService.getList(params.locationId);
  }

}
