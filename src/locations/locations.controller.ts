import { Controller, Get } from '@nestjs/common';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {

  }

  @Get()
  async getList(): Promise<Location[]>{
    return await this.locationsService.getList();
  }
}
