import { ConfigService } from '@nestjs/config';

export function getRegisteredConfig<T>(
    configService: ConfigService,
    key: string | symbol,
): T {
    return configService.getOrThrow<T>(key);
}
