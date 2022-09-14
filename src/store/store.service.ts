import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Store } from './store.model';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel('Store') private readonly storeModel: Model<Store>,
  ) {}

  async storeOutput(output: string) {
    const newStoredOutput = new this.storeModel({ command: output });
    console.log('info: saving output into database');
    const result = await newStoredOutput.save();
    return result;
  }
}
