import { Transport } from '@nestjs/microservices';
import type { GrpcOptions } from '@nestjs/microservices';

import { getUserGrpcClientOptions } from '../../grpc/user-grpc.options.js';
import type { UserGrpcConfig } from '../user-grpc.config.js';

export function createUserGrpcClientRegisterOptions(
    config: UserGrpcConfig,
): GrpcOptions {
    return {
        transport: Transport.GRPC,
        options: getUserGrpcClientOptions(config.url),
    };
}
