import { registerAs } from '@nestjs/config';

import { readEnvStringOptional } from './env.js';

export interface RmqConfig {
    url: string;
    queue: string;
}

export const rmqConfig = registerAs(
    'rmq',
    (): RmqConfig => ({
        url: readEnvStringOptional(
            'RMQ_URL',
            'amqp://admin:123456@localhost:5672',
        ),
        queue: readEnvStringOptional('RMQ_QUEUE_NAME', 'notifications_queue'),
    }),
);
