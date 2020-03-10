import { IsOptional, IsString } from 'class-validator';
import { GetListQueryParams } from '../../common/dto/getListQueryParams';

export class GetLocationListQueryParams extends GetListQueryParams {
  @IsOptional()
  @IsString()
  country: string;
}
