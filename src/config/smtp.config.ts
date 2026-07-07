import { registerAs } from '@nestjs/config';

import { readEnvBoolean, readEnvNumber, readEnvString } from './env.js';

export interface SmtpConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    fromAddress: string;
    secure: boolean;
}

export const smtpConfig = registerAs(
    'smtp',
    (): SmtpConfig => ({
        host: readEnvString('SMTP_HOST'),
        port: readEnvNumber('SMTP_PORT'),
        username: readEnvString('SMTP_USERNAME'),
        password: readEnvString('SMTP_PASSWORD'),
        fromAddress: readEnvString('SMTP_FROM_ADDRESS'),
        secure: readEnvBoolean('SMTP_SECURE'),
    }),
);
