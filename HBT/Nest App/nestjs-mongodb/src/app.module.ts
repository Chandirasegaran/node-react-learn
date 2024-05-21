// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { User } from './schemas/schemas.module';
// import { UsersModule } from './users/users.module';
// import { UsersService } from './users/users.service';
// @Module({
//   imports: [MongooseModule.forRoot('mongodb+srv://Parkavi:iZJNOONrBjsXVjZL@cluster0.wad8pdy.mongodb.net/?retryWrites=true&w=majority'),UsersModule],
//   // imports: [MongooseModule.forRoot('mongodb://localhost:27017/emaildart'),UsersModule],
//   controllers: [],
//   providers: [],
// })
// export class AppModule { }


import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Parkavi:iZJNOONrBjsXVjZL@cluster0.wad8pdy.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
