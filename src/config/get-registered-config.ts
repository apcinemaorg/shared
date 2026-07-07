import { ConfigService } from '@nestjs/config';

const PARTIAL_CONFIGURATION_KEY = 'PARTIAL_CONFIGURATION_KEY';

type RegisteredConfigFactory = (() => unknown) & {
    [PARTIAL_CONFIGURATION_KEY]?: string;
};

export function getRegisteredConfig<T>(
    configService: ConfigService,
    configFactory: RegisteredConfigFactory,
): T {
    const namespace = configFactory[PARTIAL_CONFIGURATION_KEY];

    if (typeof namespace !== 'string') {
        throw new Error('Expected a registerAs config factory');
    }

    return configService.getOrThrow<T>(namespace);
}
