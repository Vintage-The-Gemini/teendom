# Teendom Africa - Claude Memory File

## Project Overview
**Teendom Africa** - Awards platform celebrating exceptional teenagers (13-19) across Africa through nominations and recognition.

## Tech Stack
### Frontend
- **Framework**: React 19 + Vite
- **Styling**: TailwindCSS
- **State**: Redux Toolkit + React Query
- **Forms**: React Hook Form + Yup validation
- **Routing**: React Router DOM
- **Animation**: Framer Motion
- **Icons**: React Icons, Lucide React
- **Images**: Cloudinary integration

### Backend  
- **Runtime**: Node.js + Express
- **Database**: MongoDB + Mongoose
- **Auth**: JWT authentication
- **File Upload**: Multer + Cloudinary
- **Email**: Nodemailer
- **Security**: bcryptjs, CORS

## Project Structure
```
teendom/
├── frontend/           # React app
│   ├── src/
│   │   ├── pages/      # HomePage, AdminPanel, AwardsPage, etc.
│   │   ├── contexts/   # AuthContext
│   │   └── ...
├── backend/            # Express API
│   ├── models/         # Nomination.js
│   ├── routes/         # nominations.js, auth.js
│   └── server.js
├── package.json        # Root scripts
└── render.yaml         # Deployment config
```

## Key Commands
```bash
# Development
npm run dev             # Start frontend dev server
cd backend && npm run dev   # Start backend with nodemon

# Production
npm run build          # Build frontend
npm run start          # Start backend server

# Linting (check if available)
npm run lint           # Frontend linting
npm run typecheck      # Type checking
```

## Key Features
- **Awards System**: 10+ categories (Academic, Leadership, Innovation, etc.)
- **Nomination Form**: Multi-section form for nominating teens
- **Admin Panel**: Management interface for nominations
- **Articles System**: Blog/content management
- **Authentication**: JWT-based admin login
- **File Upload**: Cloudinary integration for images

## Database Models
- **Nomination**: Nominator info, nominee details, award category, achievements
- Age range: 13-19 years
- Required fields: name, email, phone, relationship, county

## Deployment
- **Platform**: Render.com
- **Database**: MongoDB Atlas
- **Environment**: Production configs in render.yaml
- **Health Check**: /api/health endpoint

## Development Notes
- Uses absolute imports with Vite
- Responsive design with mobile-first approach
- Golden (#DAA520) and dark blue theme colors
- Didot font for headings, Montserrat for body text
- Error boundaries and fallbacks implemented
- Unsplash integration for abstract imagery

## Recent Changes (Previous Session)
- **Homepage Energy Enhancement**: Replaced React icons with abstract Unsplash photos
- **Visual Redesign**: Updated color scheme from red to golden/dark blue gradient
- **Mobile Navbar Fix**: Improved mobile navigation visibility with golden colors
- **Judges Page Updates**: Modified carousel timing and removed borders
- **Categories Page**: Capitalized award titles and added white backgrounds
- **About Page**: Removed CEO title overlay and justified text alignment
- **GetInvolved Page**: Created new page with simplified partner/volunteer sections
- **Abstract Graphics**: Final iteration uses abstract colorful photos instead of people
- **Animation Optimization**: Reduced excessive floating animations for cleaner look

## Latest Implementation (Current Session)
### ✅ Complete Awards Frontend + Backend Integration
- **PDF Compliance**: Updated existing awards-frontend nomination form to match PDF requirements exactly
- **Backend Schema Update**: Enhanced backend with new optional fields (dateOfBirth, gender, nationality, currentGrade) while preserving existing data
- **Word Count Update**: Changed validation from 50-100 to 100-750 words for nomination statements
- **API Connection**: Connected awards-frontend to deployed backend API successfully
- **File Upload Integration**: Full Cloudinary integration working between awards-frontend and backend
- **Production Ready**: Both awards-frontend and backend can be deployed independently

### 🔧 Technical Implementation Details
- **Awards Frontend**: `http://localhost:5180` (awards-frontend directory)
- **Main Frontend**: `http://localhost:5179` (frontend directory) - **NOT MODIFIED**
- **Admin Panel**: `/admin` route in main frontend works with updated schema  
- **Backend API**: `https://teendom-africa-backend.onrender.com/api/nominations`
- **File Uploads**: `https://teendom-africa-backend.onrender.com/api/upload`
- **Database**: MongoDB with backward-compatible schema updates
- **Validation**: Client-side + server-side validation with proper error handling

### 🎯 Form Sections (PDF Compliant)
1. **Nominator Details**: Name, email, phone, relationship to nominee
2. **Nominee Details**: Name, DOB, age, gender, county, nationality, school, grade, contact
3. **Award Category**: 10 categories (Academic, Leadership, Innovation, etc.)
4. **Nomination Statement**: Short bio (250 words max) + detailed statement (100-750 words)
5. **Supporting Documents**: Photo upload + supporting files + social/video links
6. **Referee Information**: Non-family adult professional reference required
7. **Consent & Declaration**: All required consents with parental consent for under-18

### 📊 Data Flow Architecture
- **Awards Frontend** (`localhost:5180`) → **Backend API** → **MongoDB Atlas** 
- **Main Frontend** (`localhost:5179`) → **Admin Panel** → **Backend API**
- **Images/Videos** → **Cloudinary** 
- **Supporting Documents** → **Cloudinary** (supports PDF, DOC, images up to 5MB)
- **Admin Operations** → **Full CRUD operations** on nominations

### 🔒 Validation & Security
- **Age Verification**: 13-19 years restriction enforced
- **Required Fields**: All PDF mandatory fields enforced
- **File Validation**: Size limits (5MB), type restrictions, secure upload
- **Data Integrity**: Complete form validation on both client and server
- **API Security**: CORS enabled, proper error handling
- **Cross-Origin**: Awards frontend successfully communicates with deployed backend
- **Data Persistence**: Enhanced auto-save with visibility change and beforeunload event handlers
- **User Experience**: Visual saving indicators and clear/restart functionality

## Important Files
- `frontend/src/pages/HomePage.jsx` - Landing page with hero section (**NOT MODIFIED**)
- `awards-frontend/src/pages/NominatePage.jsx` - Awards nomination page
- `awards-frontend/src/components/nominations/NominationForm.jsx` - **UPDATED**: Enhanced with auto-save indicators and persistence
- `awards-frontend/src/components/nominations/SupportingMaterials.jsx` - **UPDATED**: Added photo preview and document display
- `backend/models/Nomination.js` - **UPDATED**: Enhanced schema with new optional fields
- `backend/routes/nominations.js` - **UPDATED**: Handles new form fields and API endpoints
- `backend/server.js` - Express server with Cloudinary integration
- `render.yaml` - Deployment configuration

## Testing Status & Results
- ✅ **Backend API**: Successfully accepts nominations from awards-frontend
- ✅ **Schema Validation**: New optional fields working (dateOfBirth, gender, nationality, currentGrade)
- ✅ **Word Count**: 100-750 word validation implemented and tested
- ✅ **File Uploads**: Cloudinary integration ready for images/videos/documents
- ✅ **API Endpoints**: All CRUD operations functional
- ✅ **Database**: MongoDB storing enhanced nomination data properly
- ✅ **Cross-Origin**: Awards-frontend ↔ Backend communication working
- ✅ **Test Submission**: Successful nomination ID: `68b995217b2c83d10420c4ee`
- ✅ **Photo Preview**: Image preview with remove functionality implemented
- ✅ **Document Display**: Supporting documents show with thumbnails and view/remove options
- ✅ **Enhanced Persistence**: Auto-save with visual indicators and multiple save triggers
- ✅ **Complete UX**: Photo previews, document management, and robust data persistence
- 🚀 **Status**: Production ready with full end-to-end nomination testing capability

## Deployment Ready
- **Awards Frontend**: Can be deployed to any hosting platform (Render, Vercel, Netlify)
- **Backend**: Already deployed at `https://teendom-africa-backend.onrender.com`
- **Database**: MongoDB Atlas connected and functional
- **Admin Panel**: Accessible via main frontend `/admin` route
- **File Storage**: Cloudinary configured for all file uploads

## Latest Enhancement Features (Final Session)
### 📸 Photo Preview & Document Management
- **Photo Preview**: Uploaded nominee photos display as 128x128px rounded previews with remove option
- **Document Thumbnails**: Supporting documents show image previews for photos, PDF icons for PDFs
- **File Management**: Each uploaded file has view link and individual remove button
- **Upload Progress**: Real-time progress bars for both photo and document uploads
- **File Type Icons**: Visual indicators for different file types (images, PDFs, documents)

### 💾 Enhanced Data Persistence
- **Multi-Trigger Auto-Save**: Saves on text input, page visibility change, and before browser close
- **Visual Indicators**: Real-time "Saving..." spinner in form header during auto-save
- **Data Recovery Info**: Persistent notification showing auto-save status with green pulse dot
- **Clear & Restart**: One-click button to clear saved data and restart form from scratch
- **Robust Error Handling**: Try-catch blocks prevent save failures from breaking functionality
- **Browser Event Hooks**: Handles beforeunload and visibilitychange events for comprehensive data protection

### 🎨 UI/UX Improvements
- **Progress Indicators**: Visual feedback during file uploads with percentage completion
- **Enhanced File Cards**: Improved document display with thumbnails, names, and action buttons
- **Theme Consistency**: All new components match golden (#DAA520) and dark blue theme colors
- **Responsive Design**: All new features work seamlessly across desktop and mobile devices