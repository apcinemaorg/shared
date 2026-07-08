import { registerAs } from '@nestjs/config';

import { readEnvNumberOptional, readEnvStringOptional } from './env.js';

export interface AvatarConfig {
    storagePath: string;
    maxSizeMb: number;
    publicBasePath: string;
}

export const avatarConfig = registerAs(
    'avatar',
    (): AvatarConfig => ({
        storagePath: readEnvStringOptional(
            'AVATAR_STORAGE_PATH',
            './uploads/avatars',
        ),
        maxSizeMb: readEnvNumberOptional('AVATAR_MAX_SIZE_MB', 5),
        publicBasePath: readEnvStringOptional('AVATAR_PUBLIC_BASE_PATH', '/avatars'),
    }),
);
