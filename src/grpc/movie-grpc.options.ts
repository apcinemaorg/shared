export const MOVIE_GRPC_PACKAGE = 'movie.v1';

export const MOVIE_GRPC_PROTO_PATH =
    'node_modules/@apcinema/contracts/proto/movie.proto';

import {
    GRPC_LOADER_OPTIONS,
    type GrpcLoaderOptions,
} from './auth-grpc.options.js';

export interface MovieGrpcOptions {
    package: string;
    protoPath: string;
    url: string;
    loader: GrpcLoaderOptions;
}

export function getMovieGrpcServerOptions(url: string): MovieGrpcOptions {
    return {
        package: MOVIE_GRPC_PACKAGE,
        protoPath: MOVIE_GRPC_PROTO_PATH,
        url,
        loader: GRPC_LOADER_OPTIONS,
    };
}

export function getMovieGrpcClientOptions(url: string): MovieGrpcOptions {
    return getMovieGrpcServerOptions(url);
}
