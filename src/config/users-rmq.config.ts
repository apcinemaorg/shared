import { registerAs } from '@nestjs/config';

import { readEnvStringOptional } from './env.js';

export interface UsersRmqConfig {
    url: string;
    queue: string;
}

export const usersRmqConfig = registerAs(
    'usersRmq',
    (): UsersRmqConfig => ({
        url: readEnvStringOptional(
            'RMQ_URL',
            'amqp://admin:123456@localhost:5672',
        ),
        queue: readEnvStringOptional('RMQ_USERS_QUEUE_NAME', 'users_queue'),
    }),
);
