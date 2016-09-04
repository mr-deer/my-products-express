import mongoose from 'mongoose';
import List from './list';

const Schema = mongoose.Schema;

const ProductSchema = Schema({
  name: { type: String, ref: 'List' },
  cost: { type: Number, default: 0, ref: 'List' },
  amount: { type: Number, default: 1, ref: 'List' },
});

export default mongoose.model('Product', ProductSchema);