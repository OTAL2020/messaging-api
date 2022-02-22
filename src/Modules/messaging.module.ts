import { Module } from '@nestjs/common';
import { UserController } from 'src/Controllers/user.controller';
import { userService } from 'src/Services/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from 'src/Schema/user.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
  controllers: [UserController],
  providers: [userService],
})
export class MessagingModule {}