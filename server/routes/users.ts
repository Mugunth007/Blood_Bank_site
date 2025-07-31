import express from 'express';
import User from '../models/User.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById((req as any).user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ success: true, user });
  } catch (error: any) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', auth, async (req, res) => {
  try {
    const { name, bloodType, location, phone } = req.body;
    
    const user = await User.findByIdAndUpdate(
      (req as any).user.userId,
      { name, bloodType, location, phone },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ success: true, user });
  } catch (error: any) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get compatible donors for a blood type
router.get('/donors/compatible/:bloodType', auth, async (req, res) => {
  try {
    const { bloodType } = req.params;
    const { location } = req.query;

    // Define compatibility rules
    const compatibilityMap: { [key: string]: string[] } = {
      'A+': ['A+', 'A-', 'O+', 'O-'],
      'A-': ['A-', 'O-'],
      'B+': ['B+', 'B-', 'O+', 'O-'],
      'B-': ['B-', 'O-'],
      'AB+': ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      'AB-': ['A-', 'B-', 'AB-', 'O-'],
      'O+': ['O+', 'O-'],
      'O-': ['O-'],
    };

    const compatibleTypes = compatibilityMap[bloodType] || [];
    
    const query: any = {
      role: 'donor',
      bloodType: { $in: compatibleTypes },
      isActive: true,
    };

    if (location) {
      query.location = new RegExp(location as string, 'i');
    }

    const donors = await User.find(query)
      .select('name bloodType location')
      .limit(50);

    res.json({ success: true, donors });
  } catch (error: any) {
    console.error('Error fetching compatible donors:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;