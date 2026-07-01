import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import type { AuthenticatedRequest } from '../types/authenticated-request.js';
import type { AuthTokenPayload } from '../types/auth-token.payload.js';

export const CurrentUser = createParamDecorator(
    (_data: unknown, context: ExecutionContext): AuthTokenPayload => {
        const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
        return request.user;
    },
);
