// Script to migrate existing image-type PDFs to raw-type resources in Cloudinary
import { v2 as cloudinary } from 'cloudinary';
import mongoose from 'mongoose';
import Nomination from '../models/Nomination.js';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

async function migrateCloudinaryResources() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📊 Connected to MongoDB');

    const nominations = await Nomination.find({
      'supportingMaterials.supportingDocuments': { $exists: true, $not: { $size: 0 } }
    });

    console.log(`📄 Found ${nominations.length} nominations with documents\n`);

    for (const nomination of nominations) {
      console.log(`🔧 Processing nomination ${nomination._id}`);
      
      if (nomination.supportingMaterials?.supportingDocuments) {
        for (let i = 0; i < nomination.supportingMaterials.supportingDocuments.length; i++) {
          const doc = nomination.supportingMaterials.supportingDocuments[i];
          
          if (doc.url && doc.url.includes('/image/upload/') && doc.name?.toLowerCase().endsWith('.pdf')) {
            try {
              // Extract public_id from the URL
              const urlParts = doc.url.split('/');
              const versionIndex = urlParts.findIndex(part => part.startsWith('v'));
              const publicIdWithExt = urlParts[versionIndex + 2]; // After teendom-awards/
              const publicId = `teendom-awards/${publicIdWithExt.replace('.pdf', '')}`;
              
              console.log(`  📎 Migrating: ${doc.name}`);
              console.log(`  🔗 Public ID: ${publicId}`);
              
              // Try to access the resource as raw type
              try {
                const rawUrl = doc.url.replace('/image/upload/', '/raw/upload/');
                console.log(`  🧪 Testing raw URL: ${rawUrl}`);
                
                // Update the URL in database immediately (the file should exist as raw)
                nomination.supportingMaterials.supportingDocuments[i].url = rawUrl;
                
                console.log(`  ✅ Updated URL to raw format`);
                
              } catch (error) {
                console.log(`  ❌ Error with ${doc.name}:`, error.message);
              }
              
            } catch (error) {
              console.error(`  ❌ Failed to process ${doc.name}:`, error.message);
            }
          }
        }
        
        // Save the nomination with updated URLs
        await nomination.save();
        console.log(`✅ Updated nomination ${nomination._id}\n`);
      }
    }
    
    console.log(`🎉 Migration completed!`);
    
  } catch (error) {
    console.error('❌ Migration error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('📊 Disconnected from MongoDB');
  }
}

migrateCloudinaryResources();