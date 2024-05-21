// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User } from 'src/schemas/schemas.module';
// import { createUserDto } from './dto/CreateUser.dto';

// @Injectable()
// export class UsersService {
//     constructor(@InjectModel(User.name) private userModel:Model<User>){}

//     createUsers(createUserDto:createUserDto){
//         const newUser = new this.userModel(createUserDto);
//         return newUser.save()
//     }

//     getsUsers(){
//         return this.userModel.find();
//     }
// }

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/schemas.module'; // Updated path
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  getUsers() {
    return this.userModel.find();
  }
}
