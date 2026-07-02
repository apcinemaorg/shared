import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import type { Request } from 'express';

import { ACCESS_TOKEN_COOKIE } from '../constants/auth-cookie.constants.js';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator.js';
import type { AuthenticatedRequest } from '../types/authenticated-request.js';
import { AuthTokenPayload, isAuthTokenPayload } from '../types/auth-token.payload.js';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    public constructor(
        private readonly jwtService: JwtService,
        private readonly reflector: Reflector,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (isPublic) {
            return true;
        }

        const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
        const token = this.extractAccessToken(request);

        if (!token) {
            throw new UnauthorizedException('Missing access token');
        }

        try {
            const payload: unknown = await this.jwtService.verifyAsync(token);

            if (!isAuthTokenPayload(payload) || payload.type !== 'access') {
                throw new UnauthorizedException('Invalid access token');
            }

            request.user = payload;
            return true;
        } catch (error) {
            if (error instanceof UnauthorizedException) {
                throw error;
            }

            throw new UnauthorizedException('Invalid access token');
        }
    }

    private extractAccessToken(request: Request): string | undefined {
        const cookies = request.cookies as Record<string, string | undefined> | undefined;
        const cookieToken = cookies?.[ACCESS_TOKEN_COOKIE];

        if (cookieToken) {
            return cookieToken;
        }

        return this.extractBearerToken(request);
    }

    private extractBearerToken(request: Request): string | undefined {
        const authorization = request.headers.authorization;

        if (!authorization) {
            return undefined;
        }

        const [scheme, token] = authorization.split(' ');

        if (scheme !== 'Bearer' || !token) {
            return undefined;
        }

        return token;
    }
}
