// protected.module.ts
import { Module } from '@nestjs/common';
import { ProtectedController } from './protected.controller';

@Module({
  controllers: [ProtectedController],
})
export class ProtectedModule {}

