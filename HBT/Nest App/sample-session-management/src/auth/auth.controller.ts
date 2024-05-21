// src/auth/auth.controller.ts
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }

  @Post('logout')
  async logout(@Request() req) {
    req.logout();
    return { message: 'Logged out' };
  }

  @Post('status')
  async getStatus(@Request() req) {
    if (req.isAuthenticated()) {
      return req.user;
    }
    return { message: 'Not authenticated' };
  }
}
