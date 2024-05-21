import { Controller, Get, Post } from '@nestjs/common';
import { CurdService } from './curd.service';

@Controller('curd')
export class CurdController {
    constructor (private curdService: CurdService){}

    @Post('greet')
    greet(){
        return {
            "message":"Hello from CURD using NestJS!"
        }
    }

    @Get('fromDev')
    FormDataEvent(){
        return{
            "Message from Developer": "Hello from Developer!"
        }
    }
    
}
