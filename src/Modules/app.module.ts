import { Module } from '@nestjs/common';
import { UserController } from 'src/Controllers/user.controller';
import { userService } from 'src/Services/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [userService],
})
export class AppModule {}
