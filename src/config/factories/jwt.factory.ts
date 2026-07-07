import type { JwtModuleOptions } from '@nestjs/jwt';

import type { JwtConfig } from '../jwt.config.js';

export function createJwtModuleOptions(config: JwtConfig): JwtModuleOptions {
    return {
        secret: config.secret,
        signOptions: { expiresIn: config.accessTokenExpiresIn },
    };
}
