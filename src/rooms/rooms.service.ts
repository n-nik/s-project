import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Room } from './models/room.model';
import { GetRoomsListQueryParams } from './dto/getRoomsListQueryParams';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room) private readonly roomModel: typeof Room,
  ) {}

  async getList(scopes: any[], query: GetRoomsListQueryParams): Promise<Room[]> {
    return this.roomModel
      .scope(scopes.concat({ method: ['pagination', query] }))
      .findAll();
  }

  async getCount(scopes: any[]): Promise<number> {
    return this.roomModel.scope(scopes).count();
  }

  async getById(id: number): Promise<Room> {
    return this.roomModel.findByPk(id);
  }
}
