// Script to fix existing documents in Cloudinary
import { cloudinary } from '../config/cloudinary.js';
import Nomination from '../models/Nomination.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function fixExistingDocuments() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📊 Connected to MongoDB');

    // Get all nominations with supporting documents
    const nominations = await Nomination.find({
      'supportingMaterials.supportingDocuments': { $exists: true, $not: { $size: 0 } }
    });

    console.log(`📄 Found ${nominations.length} nominations with documents`);

    for (const nomination of nominations) {
      console.log(`\n🔧 Processing nomination ${nomination._id}`);
      
      if (nomination.supportingMaterials?.supportingDocuments) {
        for (let i = 0; i < nomination.supportingMaterials.supportingDocuments.length; i++) {
          const doc = nomination.supportingMaterials.supportingDocuments[i];
          
          if (doc.url) {
            try {
              // Extract public_id from Cloudinary URL
              const urlParts = doc.url.split('/');
              const fileWithExt = urlParts[urlParts.length - 1];
              const publicId = `teendom_uploads/${fileWithExt.split('.')[0]}`;
              
              console.log(`  📎 Updating document: ${doc.name || 'Unknown'}`);
              console.log(`  🔗 Public ID: ${publicId}`);
              
              // Update the resource to be publicly accessible
              const result = await cloudinary.uploader.explicit(publicId, {
                type: 'upload',
                access_mode: 'public',
                resource_type: 'auto'
              });
              
              // Update the URL in database if it changed
              if (result.secure_url !== doc.url) {
                nomination.supportingMaterials.supportingDocuments[i].url = result.secure_url;
                console.log(`  ✅ Updated URL: ${result.secure_url}`);
              } else {
                console.log(`  ✅ URL already correct`);
              }
              
            } catch (error) {
              console.error(`  ❌ Error updating ${doc.name}:`, error.message);
            }
          }
        }
        
        // Save the nomination with updated URLs
        await nomination.save();
        console.log(`✅ Updated nomination ${nomination._id}`);
      }
    }
    
    console.log('\n🎉 All documents have been updated for public access!');
    
  } catch (error) {
    console.error('❌ Error fixing documents:', error);
  } finally {
    await mongoose.disconnect();
    console.log('📊 Disconnected from MongoDB');
  }
}

// Run the script
fixExistingDocuments();