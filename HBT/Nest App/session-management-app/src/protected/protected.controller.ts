// protected.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
@UseGuards(AuthGuard('session'))
export class ProtectedController {
  @Get()
  getProtectedData() {
    return { message: 'This is protected data' };
  }
}