
import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  activityName: { type: String, required: true },
  regionOrCountry: { type: String, required: true },
  
  heroSection: {
    vibe: String,
    shortBrief: String
  },
  
  quickFacts: {
    season: String,
    topCountries: [String],
    vibe: String,
    budget: String
  },

  // Array of Objects for the spotlights
  curatedSpotlights: [{
    name: String,
    cityId: String,
    feature: String,
    _id: false
  }],

  // FLEXIBLE OBJECT: This allows different keys for different activities
  expertGuide: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  },

  proTip: String
}, { 
  // This allows you to save fields that aren't explicitly defined above
  strict: false 
});

const Experience = mongoose.model('Experience', ExperienceSchema);
export default Experience;