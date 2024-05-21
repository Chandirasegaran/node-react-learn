// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { User , UserSchema} from 'src/schemas/schemas.module';
// import { UsersService } from './users.service';
// import { UsersController } from './users.controller';

// @Module({
//     imports:[
//         MongooseModule.forFeature([{
//             name:User.name,
//             schema:UserSchema,
//         }])
//     ],
//     providers: [UsersService],
//     controllers: [UsersController]
// })
// export class UsersModule {}


import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/schemas.module'; // Updated path
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
