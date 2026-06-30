import { DocumentBuilder, type OpenAPIObject } from '@nestjs/swagger';

import type { HttpConfig } from '../http.config.js';

export function createCorsOptions(config: HttpConfig) {
    const origins = config.corsOrigins.map(origin => origin.trim()).filter(Boolean);

    return {
        origin: (
            origin: string | undefined,
            callback: (error: Error | null, allow?: boolean) => void,
        ) => {
            if (!origin || origins.includes(origin)) {
                callback(null, true);
                return;
            }

            if (
                process.env.NODE_ENV !== 'production' &&
                /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)
            ) {
                callback(null, true);
                return;
            }

            callback(new Error(`Origin ${origin} is not allowed by CORS`));
        },
        credentials: true,
    };
}

export function createSwaggerDocumentConfig(
    config: HttpConfig,
): Omit<OpenAPIObject, 'paths'> {
    return new DocumentBuilder()
        .setTitle(config.swaggerTitle)
        .setDescription(config.swaggerDescription)
        .setVersion(config.swaggerVersion)
        .addBearerAuth()
        .build();
}
