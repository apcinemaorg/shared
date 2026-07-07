import { registerAs } from '@nestjs/config';

import { ACCESS_TOKEN_EXPIRES_IN } from '../auth/constants/auth.constants.js';
import { readEnvString } from './env.js';

export interface JwtConfig {
    secret: string;
    accessTokenExpiresIn: typeof ACCESS_TOKEN_EXPIRES_IN;
}

export const jwtConfig = registerAs(
    'jwt',
    (): JwtConfig => ({
        secret: readEnvString('JWT_SECRET'),
        accessTokenExpiresIn: ACCESS_TOKEN_EXPIRES_IN,
    }),
);
