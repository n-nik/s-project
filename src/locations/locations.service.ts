import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Location } from './models/location.model';
import { GetLocationListQueryParams } from './dto/getLocationListQueryParams';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location) private readonly locationModel: typeof Location
  ) {}

  async getList(scopes: any[], query: GetLocationListQueryParams): Promise<Location[]> {
    return this.locationModel
      .scope(scopes.concat({ method: ['pagination', query] }))
      .findAll();
  }

  async getCount(scopes: any[]): Promise<number> {
    return this.locationModel.scope(scopes).count();
  }

  async getById(id: number): Promise<Location> {
    return this.locationModel.findByPk(id);
  }
}
