// auth.controller.ts
import { Controller, Post, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req) {
    const user = req.user;
    await this.authService.createSession(req, user);
    return { message: 'Login successful' };
  }

  @Get('logout')
  async logout(@Req() req) {
    await this.authService.destroySession(req);
    return { message: 'Logout successful' };
  }
}