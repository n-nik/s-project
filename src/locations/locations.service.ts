import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Location } from './models/location.model';
import { DEFAULT_LIMIT } from '../app.constants';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location) private readonly locationModel: typeof Location
  ) {}

  /* TODO add query params for pagination (limit, offset).
      Temporarily query limited with default value.
  */
  async getList(): Promise<Location[]> {
    return this.locationModel.findAll({ limit: DEFAULT_LIMIT });
  }

  async getById(id: number): Promise<Location> {
    return this.locationModel.findByPk(id);
  }
}
