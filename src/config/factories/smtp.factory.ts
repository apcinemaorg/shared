import type { SmtpConfig } from '../smtp.config.js';

export interface SmtpTransporterOptions {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    };
}

export function createSmtpTransporterOptions(
    config: SmtpConfig,
): SmtpTransporterOptions {
    return {
        host: config.host,
        port: config.port,
        secure: config.secure,
        auth: {
            user: config.username,
            pass: config.password,
        },
    };
}
