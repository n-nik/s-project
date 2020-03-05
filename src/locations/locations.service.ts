import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationsService {
  async getList(): Promise<Location[]> {
    return Promise.resolve([]);
  }
}
