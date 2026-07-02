import type { Provider, Type } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import type { Reflector } from '@nestjs/core';
import type { JwtService } from '@nestjs/jwt';

import { JwtAuthGuard } from '../guards/jwt-auth.guard.js';

type InjectionToken = string | symbol | Type<unknown>;

export function provideJwtAuthGuard(
    jwtServiceToken: InjectionToken,
    reflectorToken: InjectionToken,
): Provider {
    return {
        provide: APP_GUARD,
        useFactory: (jwtService: JwtService, reflector: Reflector) =>
            new JwtAuthGuard(jwtService, reflector),
        inject: [jwtServiceToken, reflectorToken],
    };
}
