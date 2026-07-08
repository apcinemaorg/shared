export type AuthTokenType = 'access' | 'refresh';

export type AccountRole = 'user' | 'moderator' | 'admin';

export interface AuthTokenPayload {
    sub: string;
    type: AuthTokenType;
    role?: AccountRole;
}

const ACCOUNT_ROLES: AccountRole[] = ['user', 'moderator', 'admin'];

export function isAuthTokenPayload(value: unknown): value is AuthTokenPayload {
    if (typeof value !== 'object' || value === null) {
        return false;
    }

    if (!('sub' in value) || typeof value.sub !== 'string') {
        return false;
    }

    if (!('type' in value)) {
        return false;
    }

    if (value.type !== 'access' && value.type !== 'refresh') {
        return false;
    }

    if ('role' in value && value.role !== undefined) {
        if (typeof value.role !== 'string') {
            return false;
        }

        if (!ACCOUNT_ROLES.includes(value.role as AccountRole)) {
            return false;
        }
    }

    return true;
}
