import { IsInt, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class GetRoomsListParams {
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  locationId: number;
}
