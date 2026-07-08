const PARTIAL_CONFIGURATION_KEY = 'PARTIAL_CONFIGURATION_KEY';

type RegisteredConfigFactory = (() => unknown) & {
    [PARTIAL_CONFIGURATION_KEY]?: string;
};

export interface ConfigReader {
    getOrThrow<T>(propertyPath: string): T;
}

export function getRegisteredConfig<T>(
    configService: ConfigReader,
    configFactory: RegisteredConfigFactory,
): T {
    const namespace = configFactory[PARTIAL_CONFIGURATION_KEY];

    if (typeof namespace !== 'string') {
        throw new Error('Expected a registerAs config factory');
    }

    return configService.getOrThrow<T>(namespace);
}
