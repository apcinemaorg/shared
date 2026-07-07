export function readEnvString(key: string): string {
    const value = process.env[key];

    if (!value) {
        throw new Error(`Missing required environment variable: ${key}`);
    }

    return value;
}

export function readEnvStringOptional(key: string, defaultValue: string): string {
    return process.env[key] ?? defaultValue;
}

export function readEnvNumber(key: string): number {
    const value = readEnvString(key);
    const parsed = Number(value);

    if (Number.isNaN(parsed)) {
        throw new Error(`Environment variable ${key} must be a number`);
    }

    return parsed;
}

export function readEnvBoolean(key: string, defaultValue = false): boolean {
    const value = process.env[key];

    if (value === undefined) {
        return defaultValue;
    }

    return value === 'true';
}
