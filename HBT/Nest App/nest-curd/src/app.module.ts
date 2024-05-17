import { Module } from '@nestjs/common';
import { CurdController } from './curd/curd.controller';
import { CurdService } from './curd/curd.service';

@Module({
  imports: [],
  controllers: [CurdController],
  providers: [CurdService],
})
export class AppModule {}
