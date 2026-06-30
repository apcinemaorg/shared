import type { ConfigFactory } from '@nestjs/config';

import { authGrpcConfig } from './auth-grpc.config.js';
import { avatarConfig } from './avatar.config.js';
import { httpConfig } from './http.config.js';
import { jwtConfig } from './jwt.config.js';
import { postgresConfig } from './postgres.config.js';
import { redisConfig } from './redis.config.js';
import { rmqConfig } from './rmq.config.js';
import { smtpConfig } from './smtp.config.js';
import { movieGrpcConfig } from './movie-grpc.config.js';
import { userGrpcConfig } from './user-grpc.config.js';
import { usersRmqConfig } from './users-rmq.config.js';

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
    usersRmqConfig,
    authGrpcConfig,
];

export const gatewayConfigs: ConfigFactory[] = [
    jwtConfig,
    httpConfig,
    authGrpcConfig,
    userGrpcConfig,
    movieGrpcConfig,
];

export const userServiceConfigs: ConfigFactory[] = [
    postgresConfig,
    userGrpcConfig,
    usersRmqConfig,
    avatarConfig,
];

export const movieServiceConfigs: ConfigFactory[] = [
    postgresConfig,
    movieGrpcConfig,
];

export const notificationServiceConfigs: ConfigFactory[] = [
    rmqConfig,
    smtpConfig,
];
