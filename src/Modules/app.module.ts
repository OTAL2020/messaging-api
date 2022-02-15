import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { MessagingModule } from './messaging.module';

@Module({
  imports: [
    MessagingModule, RouterModule.register 
    ([
      { path: 'messaging', module: MessagingModule }
    ]),
  ]
})
  
export class AppModule {}