import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from './store/store.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    StoreModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
