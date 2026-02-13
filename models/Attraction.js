
import mongoose from 'mongoose';

const InfoPointSchema = new mongoose.Schema({
  heading: String,
  brief: String
}, { _id: false }); // _id: false prevents Mongoose from creating sub-IDs for every point

const AttractionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  city: { type: String },
  country: { type: String },

  historical_narrative: {
    era: String,
    story: String,
    architectural_style: String
  },

  why_it_is_famous: [InfoPointSchema],
  tour_guide_secrets: [InfoPointSchema],

  visitor_strategy: {
    ideal_duration: String,
    best_time_to_visit: String,
    avoid_this: String
  }
});

const Attraction = mongoose.model('Attraction', AttractionSchema);
export default Attraction;