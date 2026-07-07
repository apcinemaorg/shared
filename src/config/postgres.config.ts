import { registerAs } from '@nestjs/config';

import { readEnvNumber, readEnvString } from './env.js';

export interface PostgresConfig {
    user: string;
    password: string;
    host: string;
    port: number;
    database: string;
}

export const postgresConfig = registerAs(
    'postgres',
    (): PostgresConfig => ({
        user: readEnvString('POSTGRES_USER'),
        password: readEnvString('POSTGRES_PASSWORD'),
        host: readEnvString('POSTGRES_HOST'),
        port: readEnvNumber('POSTGRES_PORT'),
        database: readEnvString('POSTGRES_DB'),
    }),
);
