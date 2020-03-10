import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, Max, Min } from 'class-validator';
import { MAX_LIMIT } from '../../app.constants';

export class PaginationQueryParams {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Max(MAX_LIMIT)
  @Type(() => Number)
  limit: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  offset: number;

}
