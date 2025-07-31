import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from './models/User.js';
import BloodRequest from './models/BloodRequest.js';

dotenv.config();

const seedUsers = [
  {
    name: 'John Patient',
    email: 'patient@demo.com',
    password: 'password123',
    role: 'patient',
    bloodType: 'O+',
    location: 'Downtown',
    phone: '+1 (555) 123-4567',
  },
  {
    name: 'Sarah Donor',
    email: 'donor@demo.com',
    password: 'password123',
    role: 'donor',
    bloodType: 'O+',
    location: 'Downtown',
    phone: '+1 (555) 234-5678',
  },
  {
    name: 'Dr. Michael Provider',
    email: 'provider@demo.com',
    password: 'password123',
    role: 'provider',
    bloodType: 'A+',
    location: 'Medical District',
    phone: '+1 (555) 345-6789',
  },
  {
    name: 'Emily Donor',
    email: 'emily.donor@demo.com',
    password: 'password123',
    role: 'donor',
    bloodType: 'A-',
    location: 'Westside',
    phone: '+1 (555) 456-7890',
  },
  {
    name: 'Robert Donor',
    email: 'robert.donor@demo.com',
    password: 'password123',
    role: 'donor',
    bloodType: 'B+',
    location: 'Northridge',
    phone: '+1 (555) 567-8901',
  },
];

const seedBloodRequests = [
  {
    patientId: 'P001',
    patientName: 'Anonymous Patient',
    bloodType: 'O+',
    unitsNeeded: 2,
    urgency: 'urgent',
    hospital: 'City General Hospital',
    location: 'Downtown',
    description: 'Urgent need for surgery patient',
    contactPhone: '+1 (555) 123-4567',
  },
  {
    patientId: 'P002',
    patientName: 'Anonymous Patient',
    bloodType: 'A-',
    unitsNeeded: 1,
    urgency: 'critical',
    hospital: 'Memorial Medical Center',
    location: 'Westside',
    description: 'Emergency transfusion needed',
    contactPhone: '+1 (555) 234-5678',
  },
  {
    patientId: 'P003',
    patientName: 'Anonymous Patient',
    bloodType: 'B+',
    unitsNeeded: 3,
    urgency: 'routine',
    hospital: 'Regional Health Center',
    location: 'Northridge',
    description: 'Scheduled procedure preparation',
    contactPhone: '+1 (555) 345-6789',
  },
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bloodbank');
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await BloodRequest.deleteMany({});
    console.log('Cleared existing data');

    // Create users
    const createdUsers = [];
    for (const userData of seedUsers) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      
      const user = new User({
        ...userData,
        password: hashedPassword,
      });
      
      await user.save();
      createdUsers.push(user);
    }
    console.log(`Created ${createdUsers.length} users`);

    // Create blood requests
    const providerUser = createdUsers.find(user => user.role === 'provider');
    if (providerUser) {
      for (const requestData of seedBloodRequests) {
        const bloodRequest = new BloodRequest({
          ...requestData,
          requestedBy: providerUser._id,
        });
        await bloodRequest.save();
      }
      console.log(`Created ${seedBloodRequests.length} blood requests`);
    }

    console.log('Database seeded successfully!');
    console.log('\nDemo accounts:');
    console.log('Patient: patient@demo.com / password123');
    console.log('Donor: donor@demo.com / password123');
    console.log('Provider: provider@demo.com / password123');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();