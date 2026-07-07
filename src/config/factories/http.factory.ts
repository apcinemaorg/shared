import { DocumentBuilder, type OpenAPIObject } from '@nestjs/swagger';

import type { HttpConfig } from '../http.config.js';

export function createCorsOptions(config: HttpConfig) {
    return {
        origin: config.corsOrigins,
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
