import type { ConfigFactory } from '@nestjs/config';

import { authGrpcConfig } from './auth-grpc.config.js';
import { httpConfig } from './http.config.js';
import { jwtConfig } from './jwt.config.js';
import { postgresConfig } from './postgres.config.js';
import { redisConfig } from './redis.config.js';
import { rmqConfig } from './rmq.config.js';
import { smtpConfig } from './smtp.config.js';

export interface AppConfigOptions {
    isGlobal: true;
    envFilePath: string;
    load: ConfigFactory[];
}

export function createAppConfigOptions(
    load: ConfigFactory[],
    envFilePath = '.env',
): AppConfigOptions {
    return {
        isGlobal: true,
        envFilePath,
        load,
    };
}

export const authServiceConfigs: ConfigFactory[] = [
    jwtConfig,
    postgresConfig,
    redisConfig,
    rmqConfig,
    authGrpcConfig,
];

export const gatewayConfigs: ConfigFactory[] = [
    jwtConfig,
    httpConfig,
    authGrpcConfig,
];

export const notificationServiceConfigs: ConfigFactory[] = [
    rmqConfig,
    smtpConfig,
];
