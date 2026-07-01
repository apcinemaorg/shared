import type { Request } from 'express';

import type { AuthTokenPayload } from './auth-token.payload.js';

export type AuthenticatedRequest = Request & {
    user: AuthTokenPayload;
};
