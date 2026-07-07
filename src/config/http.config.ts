import { registerAs } from '@nestjs/config';

import { readEnvNumber, readEnvString } from './env.js';

export interface HttpConfig {
    host: string;
    port: number;
    corsOrigins: string[];
    swaggerTitle: string;
    swaggerDescription: string;
    swaggerVersion: string;
}

export const httpConfig = registerAs(
    'http',
    (): HttpConfig => ({
        host: readEnvString('HTTP_HOST'),
        port: readEnvNumber('HTTP_PORT'),
        corsOrigins: readEnvString('HTTP_CORS').split(','),
        swaggerTitle: readEnvString('SWAGGER_TITLE'),
        swaggerDescription: readEnvString('SWAGGER_DESCRIPTION'),
        swaggerVersion: readEnvString('SWAGGER_VERSION'),
    }),
);
