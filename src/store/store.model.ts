import * as mongoose from 'mongoose';

export const StoreSchema = new mongoose.Schema({
  command: {
    type: String,
    require: true,
  },
});

export interface Store {
  id: string;
  command: string;
}
