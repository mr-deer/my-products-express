import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = Schema({
  name: { type: String },
  cost: { type: Number, default: 0 },
  amount: { type: Number, default: 1 },
  checked: { type: Boolean, default: false }
});

export default mongoose.model('Product', ProductSchema);