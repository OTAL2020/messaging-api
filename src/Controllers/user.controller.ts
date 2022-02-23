import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createuserDTO} from 'src/DTO/User/createUser.dto';
import { updateuserDTO } from 'src/DTO/User/updateUser.dto';
import { User } from 'src/Schema/user.schema';
import { userService } from '../Services/user.service';
@Controller('user')
export class UserController {
    constructor(private userService: userService) {}
        
    @Post('/create')
    @UsePipes(ValidationPipe)
    async createUser(@Body()userdata: createuserDTO) {
        await this.userService.createUser(userdata)
    } 

    @Get('/getUsers')
    async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get('/getUser/:userId')
  async getUser(@Param('userId') userId: number): Promise<User> {
    return this.userService.getUser(userId);
  }

  @Patch('updateUser')
  @UsePipes(ValidationPipe)
  async updateUser(@Body()userdata: updateuserDTO) {
    await this.userService.updateUser(userdata)
  }

  @Delete('/deleteUser/:userId')
  async deleteUser(@Param('userId') userId: number) {
    return this.userService.deleteUser(userId);
  }
}
