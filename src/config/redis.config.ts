import { registerAs } from '@nestjs/config';

import { readEnvNumber, readEnvString } from './env.js';

export interface RedisConfig {
    host: string;
    port: number;
    username: string;
    password: string;
}

export const redisConfig = registerAs(
    'redis',
    (): RedisConfig => ({
        host: readEnvString('REDIS_HOST'),
        port: readEnvNumber('REDIS_PORT'),
        username: readEnvString('REDIS_USER'),
        password: readEnvString('REDIS_PASSWORD'),
    }),
);
