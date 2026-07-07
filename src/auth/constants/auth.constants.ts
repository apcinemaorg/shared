export const ACCESS_TOKEN_EXPIRES_IN = '15m' as const;
export const REFRESH_TOKEN_EXPIRES_IN = '7d' as const;
export const REFRESH_TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7;

export function getRefreshTokenRedisKey(accountId: string): string {
    return `refresh_token:${accountId}`;
}

export const PENDING_IDENTIFIER_CHANGE_TTL_SECONDS = 300;

export function getPendingIdentifierChangeRedisKey(accountId: string): string {
    return `pending_identifier_change:${accountId}`;
}
