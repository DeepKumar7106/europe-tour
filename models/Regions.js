
import mongoose from 'mongoose';

const RegionSchema = new mongoose.Schema({
  // Use 'unique: true' for IDs so you don't accidentally double-save the same region
  id: { type: String, required: true, unique: true }, 
  scale: { type: Number, default: 1 },
  name: { type: String, required: true },
  desc: { type: String },
  // x and y are strings in your data (e.g., "-10vh")
  x: { type: String },
  y: { type: String }
});

const Region = mongoose.model('Region', RegionSchema);
export default Region;