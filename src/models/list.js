import mongoose from 'mongoose';
import Product from './product';

const Schema = mongoose.Schema;

const ListSchema = Schema({
  name: String,
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

export default mongoose.model('List', ListSchema);