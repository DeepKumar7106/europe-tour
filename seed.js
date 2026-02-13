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

// Import your Models
import Region from './models/Regions.js';
import Country from './models/Coutries.js';
import City from './models/Cities.js';
import Attraction from './models/Attraction.js';
import Expedition from './models/Expedition.js';
import Experience from './models/Experience.js';
import Underrated from './models/Underrated.js';

// Import your Data
// Since your file uses 'export const', you might need to change it to 
// 'module.exports' or use a JSON file. For now, let's assume it's a JSON/Array.
import { regions, countries, cities, attractions, expeditions, experience, underrated } from './src/scripts/data.js'; 

// await Region.collection.dropIndexes(); 
// console.log("🧹 Old indexes dropped!");

const seedDatabase = async () => {
  try {
    await connectDB();

    // 1. Clean the existing collection so you don't get duplicates while testing
    await Region.deleteMany({});
    console.log('🗑️  Old Regions removed');
    await Country.deleteMany({});
    console.log('🗑️  Old Countries removed');
    await City.deleteMany({});
    console.log('🗑️  Old Cities removed');
    await Attraction.deleteMany({});
    console.log('🗑️  Old attraction removed');
    await Expedition.deleteMany({});
    console.log('🗑️  Old expedition removed');
    await Experience.deleteMany({});
    console.log('🗑️  Old experience removed');
    await Underrated.deleteMany({});
    console.log('🗑️  Old underrated removed');

    // 2. Map your 'id' from the object to 'regionId' in the schema (if names differ)
    // and insert the data

    await Region.insertMany(regions);
    console.log('✅ Regions seeded successfully!');
    
    await Country.insertMany(countries);
    console.log('✅ Countries seeded successfully!');
    
    
    await City.insertMany(cities);
    console.log('✅ Cities seeded successfully!');
    
    
    await Attraction.insertMany(attractions);
    console.log('✅ Attraction seeded successfully!');
    
    
    await Expedition.insertMany(expeditions);
    console.log('✅ Expedtion seeded successfully!');
    
    
    await Experience.insertMany(experience);
    console.log('✅ Experience seeded successfully!');
    
    
    await Underrated.insertMany(underrated);
    console.log('✅ Underrated seeded successfully!');
    
    
    // 3. Close connection and exit
    mongoose.connection.close();
    process.exit();

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};


seedDatabase();