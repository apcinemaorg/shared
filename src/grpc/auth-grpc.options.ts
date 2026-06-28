export const AUTH_GRPC_PACKAGE = 'auth.v1';

export const AUTH_GRPC_PROTO_PATH =
    'node_modules/@apcinema/contracts/proto/auth.proto';

export interface GrpcLoaderOptions {
    keepCase: boolean;
    longs: typeof String;
    enums: typeof String;
    defaults: boolean;
    oneofs: boolean;
}

export const GRPC_LOADER_OPTIONS: GrpcLoaderOptions = {
    keepCase: false,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

export interface AuthGrpcOptions {
    package: string;
    protoPath: string;
    url: string;
    loader: GrpcLoaderOptions;
}

export function getAuthGrpcServerOptions(url: string): AuthGrpcOptions {
    return {
        package: AUTH_GRPC_PACKAGE,
        protoPath: AUTH_GRPC_PROTO_PATH,
        url,
        loader: GRPC_LOADER_OPTIONS,
    };
}

export function getAuthGrpcClientOptions(url: string): AuthGrpcOptions {
    return getAuthGrpcServerOptions(url);
}
