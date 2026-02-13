
import mongoose from 'mongoose';

// Subschema for the Route sections (Days)
const RouteStepSchema = new mongoose.Schema({
  day: Number,
  cityId: String,   // Used in routeBrief
  activity: String, // Used in routeBrief
  activities: String // Used in the 'route' array
}, { _id: false });

const ExpeditionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  duration: String,
  region: String,
  usp: String,
  difficulty: String,
  
  // Nested Objects
  summary: {
    vibe: String,
    shortBrief: String
  },
  
  stats: {
    groupSize: String,
    accommodation: String,
    transport: String
  },
  
  detailedKeyFeatures: {
    maxAltitude: String,
    terrain: String,
    bestSeason: String
  },

  // Arrays of Strings
  highlights: [String],
  requirements: [String],
  
  // Single Strings
  description: String,
  precaution: String,

  // Arrays of Objects (using our Subschema)
  routeBrief: [RouteStepSchema],
  route: [RouteStepSchema]
});

const Expedition = mongoose.model('Expedition', ExpeditionSchema);
export default Expedition;