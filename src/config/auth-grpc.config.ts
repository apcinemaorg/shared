import { registerAs } from '@nestjs/config';

import { readEnvStringOptional } from './env.js';

export interface AuthGrpcConfig {
    url: string;
}

export const authGrpcConfig = registerAs(
    'authGrpc',
    (): AuthGrpcConfig => ({
        url: readEnvStringOptional('AUTH_GRPC_URL', 'localhost:50051'),
    }),
);
