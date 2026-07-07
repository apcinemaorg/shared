import { Transport } from '@nestjs/microservices';
import type { GrpcOptions, RmqOptions } from '@nestjs/microservices';

import { getAuthGrpcClientOptions } from '../../grpc/auth-grpc.options.js';
import type { AuthGrpcConfig } from '../auth-grpc.config.js';

export function createAuthGrpcClientRegisterOptions(
    config: AuthGrpcConfig,
): GrpcOptions {
    return {
        transport: Transport.GRPC,
        options: getAuthGrpcClientOptions(config.url),
    };
}
