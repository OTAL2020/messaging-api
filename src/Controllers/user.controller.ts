import { Body, Controller, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { userDTO } from 'src/DTO/user.dto';
import { userService } from 'src/Services/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: userService) {}
        
    @Post('/create')
    @UsePipes(ValidationPipe)
    createUser(@Body() userdata: userDTO)
    {
        return this.userService.createUser(userdata)
    }   
}