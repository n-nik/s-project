import { Column, Index, Model, Scopes, Table } from 'sequelize-typescript';
import { CommonScopes } from '../../common/models/commonScopes';
import { Op } from 'sequelize';


@Scopes(() => ({
  pagination: CommonScopes.getPaginationScope(),
  filterByCountry: (country: string) => {
    const result = {} as any;
    if (country) {
      result.where = {
        country: { [Op.like]: `${country}%` },
      }
    }
    return result;
  }
}))
@Table
export class Location extends Model<Location> {
  @Index({
    name: 'location-country-index',
    length: 50,
  })
  @Column
  country: string;

  @Column
  city: string;
}
