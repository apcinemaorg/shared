import { registerAs } from '@nestjs/config';

import { readEnvStringOptional } from './env.js';

export interface UserGrpcConfig {
    url: string;
}

export const userGrpcConfig = registerAs(
    'userGrpc',
    (): UserGrpcConfig => ({
        url: readEnvStringOptional('USER_GRPC_URL', 'localhost:50052'),
    }),
);
