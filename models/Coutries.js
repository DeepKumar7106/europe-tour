
import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema({
  // Use 'unique: true' for IDs so you don't accidentally double-save the same Country
  id: { type: String, required: true, unique: true }, 
  name: { type: String, required: true },
  region: {type: String, required: true },
  description: { type: String }
});

const Country = mongoose.model('Country', CountrySchema);
export default Country;