// Script to check document URLs in database
import mongoose from 'mongoose';
import Nomination from '../models/Nomination.js';
import dotenv from 'dotenv';

dotenv.config();

async function checkDocumentUrls() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📊 Connected to MongoDB');

    // Find nominations with supporting documents
    const nominations = await Nomination.find({
      'supportingMaterials.supportingDocuments': { $exists: true, $not: { $size: 0 } }
    }).select('_id supportingMaterials.supportingDocuments');

    console.log(`\n📄 Found ${nominations.length} nominations with documents:\n`);

    nominations.forEach((nomination, index) => {
      console.log(`${index + 1}. Nomination ID: ${nomination._id}`);
      
      if (nomination.supportingMaterials?.supportingDocuments) {
        nomination.supportingMaterials.supportingDocuments.forEach((doc, docIndex) => {
          console.log(`   Document ${docIndex + 1}:`);
          console.log(`   - Name: ${doc.name}`);
          console.log(`   - URL: ${doc.url}`);
          console.log(`   - URL Type: ${doc.url.includes('/image/') ? 'IMAGE (❌ WRONG)' : doc.url.includes('/raw/') ? 'RAW (✅ CORRECT)' : 'OTHER'}`);
          console.log('');
        });
      }
      console.log('-------------------\n');
    });

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('📊 Disconnected from MongoDB');
  }
}

checkDocumentUrls();