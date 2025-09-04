// Script to revert URLs back to /image/ and test if they work
import mongoose from 'mongoose';
import Nomination from '../models/Nomination.js';
import dotenv from 'dotenv';

dotenv.config();

async function revertUrlsAndTest() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📊 Connected to MongoDB');

    // Find the specific nomination you were testing
    const nomination = await Nomination.findById('68b9e58ac3629c148f9591b4');
    
    if (nomination && nomination.supportingMaterials?.supportingDocuments) {
      const doc = nomination.supportingMaterials.supportingDocuments[0];
      
      console.log('📄 Current URL:', doc.url);
      
      // Revert back to image URL
      const imageUrl = doc.url.replace('/raw/upload/', '/image/upload/');
      nomination.supportingMaterials.supportingDocuments[0].url = imageUrl;
      
      await nomination.save();
      
      console.log('✅ Reverted URL to:', imageUrl);
      console.log('\n🧪 Test this URL in your browser:');
      console.log(imageUrl);
      
    } else {
      console.log('❌ Nomination not found');
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('📊 Disconnected from MongoDB');
  }
}

revertUrlsAndTest();