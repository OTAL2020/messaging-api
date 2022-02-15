import { Module } from '@nestjs/common';
import { UserController } from 'src/Controllers/user.controller';
import { userService } from 'src/Services/user.service';
import { RouterModule } from '@nestjs/core';
import { MessagingModule } from './messaging.module';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [userService],
  imports: [
    MessagingModule, RouterModule.register 
    ([
      { path: 'messaging', module: MessagingModule }
    ]),
  ]
})
export class AppModule {}
  
export class AppModule {}