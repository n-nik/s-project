export interface ResponseModel <T> {
    data: T;
}

export interface Pagination {
    totalCount: number;
}

export interface ListResponseModel <T> {
    data: T[];
    pagination: Pagination;
}
