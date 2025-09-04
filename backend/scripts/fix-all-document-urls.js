// Script to fix ALL document URLs by changing /image/ to /raw/ for PDFs and documents
import mongoose from 'mongoose';
import Nomination from '../models/Nomination.js';
import dotenv from 'dotenv';

dotenv.config();

async function fixAllDocumentUrls() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📊 Connected to MongoDB');

    const nominations = await Nomination.find({
      'supportingMaterials.supportingDocuments': { $exists: true, $not: { $size: 0 } }
    });

    console.log(`📄 Found ${nominations.length} nominations with documents\n`);

    let totalFixed = 0;

    for (const nomination of nominations) {
      console.log(`🔧 Processing nomination ${nomination._id}`);
      let changed = false;
      
      if (nomination.supportingMaterials?.supportingDocuments) {
        for (let i = 0; i < nomination.supportingMaterials.supportingDocuments.length; i++) {
          const doc = nomination.supportingMaterials.supportingDocuments[i];
          
          if (doc.url && doc.url.includes('/image/upload/')) {
            // Check if it's a document (not an actual image)
            const isDocument = doc.name && (
              doc.name.toLowerCase().endsWith('.pdf') ||
              doc.name.toLowerCase().endsWith('.doc') ||
              doc.name.toLowerCase().endsWith('.docx') ||
              doc.url.includes('.pdf')
            );
            
            if (isDocument) {
              const oldUrl = doc.url;
              const newUrl = doc.url.replace('/image/upload/', '/raw/upload/');
              nomination.supportingMaterials.supportingDocuments[i].url = newUrl;
              
              console.log(`  📎 Fixed: ${doc.name}`);
              console.log(`  🔗 Old: ${oldUrl}`);
              console.log(`  ✅ New: ${newUrl}`);
              
              changed = true;
              totalFixed++;
            } else if (doc.name && (
              doc.name.toLowerCase().endsWith('.jpg') ||
              doc.name.toLowerCase().endsWith('.jpeg') ||
              doc.name.toLowerCase().endsWith('.png') ||
              doc.name.toLowerCase().endsWith('.gif')
            )) {
              console.log(`  📷 Image kept as /image/: ${doc.name}`);
            }
          }
        }
        
        if (changed) {
          await nomination.save();
          console.log(`✅ Updated nomination ${nomination._id}`);
        } else {
          console.log(`➡️ No changes needed for ${nomination._id}`);
        }
      }
      console.log('');
    }
    
    console.log(`🎉 Fixed ${totalFixed} document URLs!`);
    console.log(`✅ All documents should now be accessible`);
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('📊 Disconnected from MongoDB');
  }
}

fixAllDocumentUrls();