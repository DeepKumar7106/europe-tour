import mongoose from "mongoose";

const PlacesDetailsSchema = new mongoose.Schema({
  name: String,
  brief: String
}, { _id: false });

const MoreCitySchema = new mongoose.Schema({
    id: { type:String, required: true, unique: true},
    cityName: {type:String, required: true},
    overview: { type: String },
    featured: {
        why_famous: String,
        why_recommended: String
    },
    famous_places_details: [PlacesDetailsSchema]
})

const MoreCity = mongoose.model('MoreCity', MoreCitySchema)
export default MoreCity