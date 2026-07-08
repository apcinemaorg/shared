import type { Provider, Type } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import type { Reflector } from '@nestjs/core';

import { RolesGuard } from '../guards/roles.guard.js';

type InjectionToken = string | symbol | Type<unknown>;

export function provideRolesGuard(reflectorToken: InjectionToken): Provider {
    return {
        provide: APP_GUARD,
        useFactory: (reflector: Reflector) => new RolesGuard(reflector),
        inject: [reflectorToken],
    };
}
