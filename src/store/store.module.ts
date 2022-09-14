import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreSchema } from './store.model';
import { StoreService } from './store.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }]),
  ],
  controllers: [],
  providers: [StoreService],
  exports: [StoreService],
})
export class StoreModule {}
