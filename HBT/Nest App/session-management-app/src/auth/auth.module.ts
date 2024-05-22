// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { ProtectedModule } from '../protected/protected.module';

@Module({
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}