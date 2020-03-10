import { IsISO8601, IsString } from 'class-validator';

export class CreateBookingBody {
  @IsString()
  @IsISO8601()
  startDate: string;

  @IsString()
  @IsISO8601()
  endDate: string;
}
