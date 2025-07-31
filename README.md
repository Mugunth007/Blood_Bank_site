# BloodBank - Blood Donation Platform

A modern, Apple-inspired blood donation platform that connects donors, patients, and healthcare providers through secure technology.

## Features

### Frontend
- **Apple-style Design**: Clean, minimalistic interface with smooth animations
- **Role-based Authentication**: Separate dashboards for patients, donors, and healthcare providers
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Blood Requests**: Live blood request system with filtering
- **Educational Resources**: Comprehensive guide on blood donation

### Backend
- **Secure Authentication**: JWT-based authentication with role-based access
- **RESTful API**: Clean API endpoints for all operations
- **MongoDB Integration**: Robust data storage with proper indexing
- **Blood Matching**: Automatic compatibility matching system
- **Request Management**: Full CRUD operations for blood requests

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens with bcrypt password hashing
- **Styling**: Tailwind CSS with custom design system

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blood-donation-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.example` to `.env`
   - Update the environment variables:
     ```
     MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/bloodbank
     JWT_SECRET=your-super-secret-jwt-key-here
     PORT=5000
     NODE_ENV=development
     ```

4. **Database Setup**
   - Create a MongoDB Atlas cluster or ensure local MongoDB is running
   - Update the `MONGODB_URI` in your `.env` file
   - Run the seed script to populate demo data:
     ```bash
     npm run seed
     ```

5. **Start the Development Server**
   ```bash
   npm run dev
   ```
   
   This will start both the frontend (port 5173) and backend (port 5000) concurrently.

### Demo Accounts

After running the seed script, you can use these demo accounts:

- **Patient**: `patient@demo.com` / `password123`
- **Donor**: `donor@demo.com` / `password123`
- **Healthcare Provider**: `provider@demo.com` / `password123`

## Project Structure

```
blood-donation-platform/
├── src/                    # Frontend React application
│   ├── components/         # Reusable UI components
│   ├── contexts/          # React context providers
│   ├── pages/             # Page components
│   └── main.tsx           # Application entry point
├── server/                # Backend Express application
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API route handlers
│   ├── middleware/        # Custom middleware
│   └── index.ts           # Server entry point
├── public/                # Static assets
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Token verification

### Blood Requests
- `GET /api/blood/requests` - Get all blood requests
- `POST /api/blood/requests` - Create new blood request
- `GET /api/blood/my-requests` - Get user's requests
- `POST /api/blood/requests/:id/respond` - Respond to request

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/donors/compatible/:bloodType` - Find compatible donors

## Features Overview

### For Donors
- Browse urgent blood requests
- Filter by blood type, location, and urgency
- Respond to requests with availability
- Track donation history
- View impact statistics

### For Patients
- Create blood requests with detailed information
- Manage active requests
- View donor responses
- Emergency contact support

### For Healthcare Providers
- Manage patient blood requests
- Access donor database
- Monitor blood inventory
- Generate reports and analytics

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Role-based access control
- Input validation and sanitization
- CORS configuration
- Environment variable protection

## Design System

The platform uses a custom design system inspired by Apple's design principles:

- **Colors**: Primary blue (#007AFF), secondary gray, accent red
- **Typography**: Inter font family with multiple weights
- **Spacing**: 8px grid system
- **Components**: Consistent button styles, form elements, and cards
- **Animations**: Smooth transitions and micro-interactions

## Development Scripts

- `npm run dev` - Start development servers (frontend + backend)
- `npm run client` - Start frontend only
- `npm run server` - Start backend only
- `npm run build` - Build for production
- `npm run seed` - Populate database with demo data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For support or questions, contact:
- Email: support@bloodbank.com
- Phone: +1 (800) BLOOD-NOW
- Emergency: 911

## License

This project is licensed under the MIT License - see the LICENSE file for details.