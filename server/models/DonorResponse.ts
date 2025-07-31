import mongoose, { Document, Schema } from 'mongoose';

export interface IDonorResponse extends Document {
  requestId: mongoose.Types.ObjectId;
  donorId: mongoose.Types.ObjectId;
  message: string;
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  responseDate: Date;
  scheduledDonationDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const donorResponseSchema = new Schema<IDonorResponse>(
  {
    requestId: {
      type: Schema.Types.ObjectId,
      ref: 'BloodRequest',
      required: true,
    },
    donorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'accepted', 'declined', 'completed'],
      default: 'pending',
    },
    responseDate: {
      type: Date,
      default: Date.now,
    },
    scheduledDonationDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Ensure a donor can only respond once per request
donorResponseSchema.index({ requestId: 1, donorId: 1 }, { unique: true });

export default mongoose.model<IDonorResponse>('DonorResponse', donorResponseSchema);