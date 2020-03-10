import { GetListQueryParams } from '../../common/dto/getListQueryParams';
import { IsISO8601, IsString } from 'class-validator';

export class GetRoomsListQueryParams extends GetListQueryParams {
  @IsString()
  @IsISO8601()
  startDate: string;

  @IsString()
  @IsISO8601()
  endDate: string;
}
