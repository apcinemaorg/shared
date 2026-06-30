import { Transport } from '@nestjs/microservices';
import type { GrpcOptions } from '@nestjs/microservices';

import { getMovieGrpcClientOptions } from '../../grpc/movie-grpc.options.js';
import type { MovieGrpcConfig } from '../movie-grpc.config.js';

export function createMovieGrpcClientRegisterOptions(
    config: MovieGrpcConfig,
): GrpcOptions {
    return {
        transport: Transport.GRPC,
        options: getMovieGrpcClientOptions(config.url),
    };
}
