import { Controller, Get, Query } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { GetLocationListQueryParams } from './dto/getLocationListQueryParams';
import { ListResponseModel } from '../common/interfaces/responses.model';
import { LocationDto } from './dto/locationDto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  async getList(@Query() query: GetLocationListQueryParams): Promise<ListResponseModel<LocationDto>>{
    let data = [];
    const scopes = [{method: ['filterByCountry', query.country]}];

    const count = await this.locationsService.getCount(scopes);
    if (count) {
      data = await this.locationsService.getList(scopes, query);
    }

    return {
      data: data.map(item => new LocationDto(item)),
      pagination: {
        totalCount: count
      }
    };
  }
}
