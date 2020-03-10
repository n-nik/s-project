import { IsInt, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookingPathParams {
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  roomId: number;
}
