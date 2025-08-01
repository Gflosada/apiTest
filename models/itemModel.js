import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: String },
  available: { type: Boolean, default: true },
});

export default mongoose.model('Item', itemSchema);
