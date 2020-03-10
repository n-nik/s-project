import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { GetRoomsListParams } from './dto/getRoomsListParams';
import { GetRoomsListQueryParams } from './dto/getRoomsListQueryParams';
import { Location } from '../locations/models/location.model';
import { LocationsService } from '../locations/locations.service';
import { ListResponseModel } from '../common/interfaces/responses.model';
import { RoomDto } from './dto/roomDto';

@Controller()
export class RoomsController {

  constructor(private readonly roomsService: RoomsService,
              private readonly locationsService: LocationsService
  ) {}

  @Get('locations/:locationId/rooms')
  async getList(
    @Param() params: GetRoomsListParams,
    @Query() query: GetRoomsListQueryParams
  ): Promise<ListResponseModel<RoomDto>>{

    const location: Location = await this.locationsService.getById(params.locationId);
    if (!location) {
      throw new NotFoundException('Location not found')
    }

    let data = [];
    const scopes = [];

    const count = await this.roomsService.getCount(scopes);
    if (count) {
      data = await this.roomsService.getList(scopes, query);
    }

    return {
      data: data.map(item => new RoomDto(item)),
      pagination: {
        totalCount: count
      }
    };
  }

}
