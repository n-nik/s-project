import { GetListQueryParams } from '../../common/dto/getListQueryParams';
import { IsISO8601, IsOptional, IsString } from 'class-validator';

export class GetRoomsListQueryParams extends GetListQueryParams {
  @IsOptional()
  @IsString()
  @IsISO8601()
  startDate: string;

  @IsOptional()
  @IsString()
  @IsISO8601()
  endDate: string;
}
