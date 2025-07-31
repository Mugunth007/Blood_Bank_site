import mongoose, { Document, Schema } from 'mongoose';

export interface IBloodRequest extends Document {
  patientId: string;
  patientName: string;
  bloodType: string;
  unitsNeeded: number;
  urgency: 'critical' | 'urgent' | 'routine';
  hospital: string;
  location: string;
  description: string;
  contactPhone: string;
  status: 'active' | 'fulfilled' | 'expired' | 'cancelled';
  requestedBy: mongoose.Types.ObjectId;
  responses: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
}

const bloodRequestSchema = new Schema<IBloodRequest>(
  {
    patientId: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    bloodType: {
      type: String,
      required: true,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    unitsNeeded: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    urgency: {
      type: String,
      required: true,
      enum: ['critical', 'urgent', 'routine'],
      default: 'routine',
    },
    hospital: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    contactPhone: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'fulfilled', 'expired', 'cancelled'],
      default: 'active',
    },
    requestedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    responses: [{
      type: Schema.Types.ObjectId,
      ref: 'DonorResponse',
    }],
    expiresAt: {
      type: Date,
      default: function() {
        // Requests expire after 7 days by default
        return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
      },
    },
  },
  {
    timestamps: true,
  }
);

// Index for efficient queries
bloodRequestSchema.index({ bloodType: 1, status: 1, location: 1 });
bloodRequestSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model<IBloodRequest>('BloodRequest', bloodRequestSchema);