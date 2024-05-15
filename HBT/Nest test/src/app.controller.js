//Controllers in Nest.js are responsible for handling incoming HTTP requests and returning responses. 

import { Controller, Dependencies, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  // @Get('users')
  // async getUsers() {
  //   return await this.appService.getUsers();
  // }
}
