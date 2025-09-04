// Script to simulate a new file upload and see what URL format we get
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
  sign_url: false
});

async function testUpload() {
  try {
    console.log('🧪 Testing new upload configuration...');
    
    // Test what happens when we upload a file as raw
    const result = await cloudinary.uploader.upload(
      'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKFRlc3QpCi9Qcm9kdWNlciAoVGVzdCkKPj4KZW5kb2JqCnhyZWYKMCAwCnRyYWlsZXIKPDwKL1NpemUgMQovUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNjQKJSVFT0Y=', 
      {
        folder: "teendom-awards",
        resource_type: "raw",
        public_id: `test-pdf-${Date.now()}`,
        access_mode: "public"
      }
    );
    
    console.log('✅ Upload successful!');
    console.log('📄 Result URL:', result.secure_url);
    console.log('🔍 Resource type:', result.resource_type);
    console.log('🔍 Format:', result.format);
    
    // Test if the URL is accessible
    console.log('\n🧪 Testing URL access...');
    const testUrl = result.secure_url;
    
    return testUrl;
    
  } catch (error) {
    console.error('❌ Upload failed:', error);
  }
}

testUpload();