import { RpcStatus } from '../enums/index.js';

export const grpcToHttp: Record<number, number> = {
    [RpcStatus.OK]: 200,
    [RpcStatus.CANCELLED]: 499,
    [RpcStatus.UNKNOWN]: 500,
    [RpcStatus.INVALID_ARGUMENT]: 400,
    [RpcStatus.DEADLINE_EXCEEDED]: 408,
    [RpcStatus.NOT_FOUND]: 404,
    [RpcStatus.ALREADY_EXISTS]: 409,
    [RpcStatus.PERMISSION_DENIED]: 403,
    [RpcStatus.RESOURCE_EXHAUSTED]: 429,
    [RpcStatus.FAILED_PRECONDITION]: 400,
    [RpcStatus.ABORTED]: 500,
    [RpcStatus.OUT_OF_RANGE]: 400,
    [RpcStatus.UNIMPLEMENTED]: 501,
    [RpcStatus.INTERNAL]: 500,
    [RpcStatus.UNAVAILABLE]: 503,
    [RpcStatus.DATA_LOSS]: 500,
    [RpcStatus.UNAUTHENTICATED]: 401,
};
