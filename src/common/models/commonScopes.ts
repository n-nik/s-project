import { GetListQueryParams } from '../dto/getListQueryParams';
import { DEFAULT_LIMIT } from '../../app.constants';

export class CommonScopes {

  static getPaginationScope() {
    return (query: GetListQueryParams) => {
      const result = {
        limit: DEFAULT_LIMIT,
        offset: 0
      };
      if (Number.isInteger(query.limit)) {
        result.limit = query.limit;
      }

      if (Number.isInteger(query.offset)) {
        result.offset = query.offset;
      }

      return result;
    }
  }

  /* TODO implement ordering scope */
}
