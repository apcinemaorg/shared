export const USER_GRPC_PACKAGE = 'user.v1';

export const USER_GRPC_PROTO_PATH =
    'node_modules/@apcinema/contracts/proto/user.proto';

import {
    GRPC_LOADER_OPTIONS,
    type GrpcLoaderOptions,
} from './auth-grpc.options.js';

export interface UserGrpcOptions {
    package: string;
    protoPath: string;
    url: string;
    loader: GrpcLoaderOptions;
}

export function getUserGrpcServerOptions(url: string): UserGrpcOptions {
    return {
        package: USER_GRPC_PACKAGE,
        protoPath: USER_GRPC_PROTO_PATH,
        url,
        loader: GRPC_LOADER_OPTIONS,
    };
}

export function getUserGrpcClientOptions(url: string): UserGrpcOptions {
    return getUserGrpcServerOptions(url);
}
