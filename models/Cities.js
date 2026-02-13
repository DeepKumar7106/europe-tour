
import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
  // Use 'unique: true' for IDs so you don't accidentally double-save the same City
  id: { type: String, required: true, unique: true }, 
  cityName: { type: String, required: true },
  countryId: {type: String, required: true },
  description: { type: String },
  bestSeason : {type: String },
  famousLocation:[String]
});

const City = mongoose.model('City', CitySchema);
export default City;