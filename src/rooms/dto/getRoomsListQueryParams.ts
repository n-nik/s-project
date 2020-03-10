import { GetListQueryParams } from '../../common/dto/getListQueryParams';
import { IsDate, IsOptional } from 'class-validator';

export class GetRoomsListQueryParams extends GetListQueryParams {
  @IsOptional()
  @IsDate()
  fromDate: Date;

  @IsOptional()
  @IsDate()
  toDate: Date;
}
