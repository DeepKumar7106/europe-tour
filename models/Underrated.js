
import mongoose from 'mongoose';

// Reusing the same logic for the array of objects
const SecretSchema = new mongoose.Schema({
  heading: String,
  brief: String
}, { _id: false });

const UnderratedSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String },
  country: { type: String },
  alternative_to: { type: String },
  why_it_is_worth_it: { type: String },
  
  historical_narrative: {
    era: String,
    story: String
  },

  tour_guide_secrets: [SecretSchema],

  crowd_free_strategy: {
    the_vibe: String,
    best_time: String
  }
});

const Underrated = mongoose.model('Underrated', UnderratedSchema);
export default Underrated;