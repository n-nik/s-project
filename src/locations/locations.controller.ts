import { Controller, Get, Query } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { Location } from './models/location.model';
import { GetLocationListQueryParams } from './dto/getLocationListQueryParams';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  async getList(@Query() query: GetLocationListQueryParams): Promise<Location[]>{
    let data = [];
    const scopes = [{method: ['filterByCountry', query.country]}];

    const count = await this.locationsService.getCount(scopes);
    if (count) {
      data = await this.locationsService.getList(scopes, query);
    }
    return data;
  }
}
