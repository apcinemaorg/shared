export interface RpcErrorPayload {
    code: string;
    message: string;
}

export interface ParsedRpcErrorPayload {
    code?: string;
    message: string | string[];
}

export function serializeRpcErrorPayload(
    errorCode: string,
    message: string,
): string {
    const payload: RpcErrorPayload = { code: errorCode, message };
    return JSON.stringify(payload);
}

export function parseRpcErrorPayload(raw: string): ParsedRpcErrorPayload {
    try {
        const parsed: unknown = JSON.parse(raw);

        if (typeof parsed !== 'object' || parsed === null || !('message' in parsed)) {
            return { message: raw };
        }

        const { message } = parsed;

        if (typeof message !== 'string' && !Array.isArray(message)) {
            return { message: raw };
        }

        let code: string | undefined;

        if ('code' in parsed && typeof parsed.code === 'string') {
            code = parsed.code;
        }

        return { code, message };
    } catch {
        return { message: raw };
    }
}
