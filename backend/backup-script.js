// Backup script for Teendom Awards database
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import Nomination from './models/Nomination.js';

async function backupDatabase() {
  try {
    console.log('🔄 Starting database backup...');
    
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to database');
    
    // Get all nominations
    const nominations = await Nomination.find({}).lean();
    console.log(`📊 Found ${nominations.length} nominations`);
    
    // Create backup directory
    const backupDir = `./backups`;
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir);
    }
    
    // Create backup file with timestamp
    const timestamp = new Date().toISOString().split('T')[0];
    const backupFile = path.join(backupDir, `teendom-backup-${timestamp}.json`);
    
    // Save backup
    fs.writeFileSync(backupFile, JSON.stringify({
      backupDate: new Date().toISOString(),
      totalRecords: nominations.length,
      data: nominations
    }, null, 2));
    
    console.log(`✅ Backup saved: ${backupFile}`);
    console.log(`📁 File size: ${(fs.statSync(backupFile).size / 1024 / 1024).toFixed(2)} MB`);
    
  } catch (error) {
    console.error('❌ Backup failed:', error);
  } finally {
    await mongoose.disconnect();
  }
}

// Run backup
backupDatabase();