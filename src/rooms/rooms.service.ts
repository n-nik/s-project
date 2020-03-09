import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DEFAULT_LIMIT } from '../app.constants';
import { Location } from '../locations/models/location.model';
import { Room } from './models/room.model';
import { LocationsService } from '../locations/locations.service';

@Injectable()
export class RoomsService {
  constructor(
    private readonly locationsService: LocationsService,
    @InjectModel(Room) private readonly roomModel: typeof Room,
  ) {}

  /* TODO add query params for pagination (limit, offset).
      Temporarily query limited with default value.
  */
  async getList(locationId: number): Promise<Room[]> {
    const location: Location = await this.locationsService.getById(locationId);
    if (!location) {
      throw new HttpException('Location not found', HttpStatus.NOT_FOUND);
    }
    return this.roomModel.findAll({ where: { locationId }, limit: DEFAULT_LIMIT });
  }

}
