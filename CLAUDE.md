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
- Red (#ef4444) and white color scheme
- Inter font family
- Error boundaries and fallbacks implemented
- Cloudinary for image management

## Recent Changes
- Fixed Vite config for proper asset serving on Render
- Updated admin routes
- Enum fixes in models

## Important Files
- `frontend/src/pages/HomePage.jsx` - Landing page with hero section
- `backend/models/Nomination.js` - Main data model
- `backend/server.js` - Express server setup
- `render.yaml` - Deployment configuration