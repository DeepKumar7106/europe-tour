import 'dotenv/config'; 
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(" MongoDB Connected...");
  } catch (err) {
    console.error("Connection Failed:", err.message);
    process.exit(1); // Exit with failure
  }
};


import Region from './models/Regions.js';
import Country from './models/Coutries.js';
import City from './models/Cities.js';
import Attraction from './models/Attraction.js';
import Expedition from './models/Expedition.js';
import Experience from './models/Experience.js';
import Underrated from './models/Underrated.js';
import MoreCity from './models/MoreCity.js';


import { regions, countries, cities, attractions, expeditions, experience, underrated } from './src/scripts/data.js'; 
import { cityData } from './src/scripts/moreData.js';
// await Region.collection.dropIndexes(); 
// console.log("🧹 Old indexes dropped!");

const seedDatabase = async () => {
  try {
    await connectDB();

    // await Region.deleteMany({});
    // console.log('🗑️  Old Regions removed');
    // await Country.deleteMany({});
    // console.log('🗑️  Old Countries removed');
    // await City.deleteMany({});
    // console.log('🗑️  Old Cities removed');
    // await Attraction.deleteMany({});
    // console.log('🗑️  Old attraction removed');
    // await Expedition.deleteMany({});
    // console.log('🗑️  Old expedition removed');
    // await Experience.deleteMany({});
    // console.log('🗑️  Old experience removed');
    // await Underrated.deleteMany({});
    // console.log('🗑️  Old underrated removed');

    await MoreCity.deleteMany({});
    console.log('🗑️  Old MoreData removed');
    
    await MoreCity.insertMany(cityData);
    console.log('✅ More data seeded successfully!');

    // await Region.insertMany(regions);
    // console.log('✅ Regions seeded successfully!');
    
    // await Country.insertMany(countries);
    // console.log('✅ Countries seeded successfully!');
    
    
    // await City.insertMany(cities);
    // console.log('✅ Cities seeded successfully!');
    
    
    // await Attraction.insertMany(attractions);
    // console.log('✅ Attraction seeded successfully!');
    
    
    // await Expedition.insertMany(expeditions);
    // console.log('✅ Expedtion seeded successfully!');
    
    
    // await Experience.insertMany(experience);
    // console.log('✅ Experience seeded successfully!');
    
    
    // await Underrated.insertMany(underrated);
    // console.log('✅ Underrated seeded successfully!');
    
    

    
    mongoose.connection.close();
    process.exit();

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};


seedDatabase();