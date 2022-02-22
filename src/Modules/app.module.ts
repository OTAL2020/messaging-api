import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MessagingModule } from './messaging.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MessagingModule, RouterModule.register 
    ([
      { path: 'messaging', module: MessagingModule }
    ]),
    MongooseModule.forRoot(process.env.DB_URI)
  ]
})
  
export class AppModule {}