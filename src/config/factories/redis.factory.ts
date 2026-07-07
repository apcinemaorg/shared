import type { RedisConfig } from '../redis.config.js';

export interface RedisConnectionOptions {
    host: string;
    port: number;
    username: string;
    password: string;
    maxRetriesPerRequest: number;
    enableOfflineQueue: boolean;
}

export function createRedisOptions(config: RedisConfig): RedisConnectionOptions {
    return {
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        maxRetriesPerRequest: 5,
        enableOfflineQueue: true,
    };
}
