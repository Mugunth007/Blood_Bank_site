import express from 'express';
import BloodRequest from '../models/BloodRequest.js';
import DonorResponse from '../models/DonorResponse.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all blood requests
router.get('/requests', async (req, res) => {
  try {
    const { bloodType, urgency, location, status = 'active' } = req.query;
    
    const query: any = { status };
    
    if (bloodType) query.bloodType = bloodType;
    if (urgency) query.urgency = urgency;
    if (location) query.location = new RegExp(location as string, 'i');

    const requests = await BloodRequest.find(query)
      .populate('requestedBy', 'name role')
      .sort({ urgency: 1, createdAt: -1 })
      .limit(50);

    res.json({ success: true, requests });
  } catch (error: any) {
    console.error('Error fetching blood requests:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create blood request
router.post('/requests', auth, async (req, res) => {
  try {
    const {
      patientId,
      patientName,
      bloodType,
      unitsNeeded,
      urgency,
      hospital,
      location,
      description,
      contactPhone,
    } = req.body;

    const bloodRequest = new BloodRequest({
      patientId,
      patientName,
      bloodType,
      unitsNeeded,
      urgency,
      hospital,
      location,
      description,
      contactPhone,
      requestedBy: (req as any).user.userId,
    });

    await bloodRequest.save();
    await bloodRequest.populate('requestedBy', 'name role');

    res.status(201).json({ success: true, request: bloodRequest });
  } catch (error: any) {
    console.error('Error creating blood request:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's blood requests
router.get('/my-requests', auth, async (req, res) => {
  try {
    const requests = await BloodRequest.find({ requestedBy: (req as any).user.userId })
      .populate('responses')
      .sort({ createdAt: -1 });

    res.json({ success: true, requests });
  } catch (error: any) {
    console.error('Error fetching user requests:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Respond to blood request (donor)
router.post('/requests/:id/respond', auth, async (req, res) => {
  try {
    const { message, scheduledDonationDate } = req.body;
    const requestId = req.params.id;
    const donorId = (req as any).user.userId;

    // Check if donor already responded
    const existingResponse = await DonorResponse.findOne({ requestId, donorId });
    if (existingResponse) {
      return res.status(400).json({ message: 'You have already responded to this request' });
    }

    const response = new DonorResponse({
      requestId,
      donorId,
      message,
      scheduledDonationDate,
    });

    await response.save();

    // Add response to the blood request
    await BloodRequest.findByIdAndUpdate(requestId, {
      $push: { responses: response._id },
    });

    res.status(201).json({ success: true, response });
  } catch (error: any) {
    console.error('Error responding to blood request:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get responses for a request
router.get('/requests/:id/responses', auth, async (req, res) => {
  try {
    const responses = await DonorResponse.find({ requestId: req.params.id })
      .populate('donorId', 'name bloodType location phone')
      .sort({ createdAt: -1 });

    res.json({ success: true, responses });
  } catch (error: any) {
    console.error('Error fetching responses:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update response status
router.patch('/responses/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    
    const response = await DonorResponse.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('donorId', 'name bloodType location');

    if (!response) {
      return res.status(404).json({ message: 'Response not found' });
    }

    res.json({ success: true, response });
  } catch (error: any) {
    console.error('Error updating response status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;