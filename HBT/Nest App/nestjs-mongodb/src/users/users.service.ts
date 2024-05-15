import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/schemas.module';
import { createUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel:Model<User>){}

    createUsers(createUserDto:createUserDto){
        const newUser = new this.userModel(createUserDto);
        return newUser.save()
    }

    getsUsers(){
        return this.userModel.find();
    }
}
