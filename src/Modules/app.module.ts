import { Module } from '@nestjs/common';
import { UserController } from 'src/Controllers/user.controller';
import { userService } from 'src/Services/user.service';
import { AppController } from '../Controllers/app.controller';
import { AppService } from '../Services/app.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, userService],
})
export class AppModule {}
