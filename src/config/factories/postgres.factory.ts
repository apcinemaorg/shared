import type { PostgresConfig } from '../postgres.config.js';

export interface PrismaPgAdapterOptions {
    user: string;
    password: string;
    host: string;
    port: number;
    database: string;
}

export function createPrismaPgAdapterOptions(
    config: PostgresConfig,
): PrismaPgAdapterOptions {
    return {
        user: config.user,
        password: config.password,
        host: config.host,
        port: config.port,
        database: config.database,
    };
}
