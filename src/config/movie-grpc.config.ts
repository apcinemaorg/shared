import { registerAs } from '@nestjs/config';

import { readEnvStringOptional } from './env.js';

export interface MovieGrpcConfig {
    url: string;
}

export const movieGrpcConfig = registerAs(
    'movieGrpc',
    (): MovieGrpcConfig => ({
        url: readEnvStringOptional('MOVIE_GRPC_URL', 'localhost:50053'),
    }),
);
