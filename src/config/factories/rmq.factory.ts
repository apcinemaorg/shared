import { Transport } from '@nestjs/microservices';
import type { MicroserviceOptions, RmqOptions } from '@nestjs/microservices';

import type { RmqConfig } from '../rmq.config.js';

export function createRmqClientOptions(config: RmqConfig): RmqOptions {
    return {
        transport: Transport.RMQ,
        options: {
            urls: [config.url],
            queue: config.queue,
            queueOptions: {
                durable: true,
            },
        },
    };
}

export function createRmqMicroserviceOptions(
    config: RmqConfig,
): MicroserviceOptions {
    return {
        transport: Transport.RMQ,
        options: {
            urls: [config.url],
            queue: config.queue,
            queueOptions: {
                durable: true,
            },
            noAck: false,
            prefetchCount: 1,
            persistent: true,
        },
    };
}
