// import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { createUserDto } from './dto/CreateUser.dto';

// @Controller('users')
// export class UsersController {
//     constructor(private usersService: UsersService){}

//     @Post()
//     @UsePipes(new ValidationPipe())
//     createUser(@Body() createUserDto: createUserDto){
//         console.log(createUserDto);
//         return this.usersService.createUsers(createUserDto)
//     }

//     @Get()
//     getUsers(){
//         return this.usersService.getsUsers();
//     }
// }


import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}
