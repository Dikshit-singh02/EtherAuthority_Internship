const mongoose = require('mongoose');

const taskTrackingSchema = new mongoose.Schema({
  internId: { type: mongoose.Schema.Types.ObjectId, ref: 'InternProfile', required: true },
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  submissionDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  rewardTokens: { type: Number, default: 0 },
  nftMinted: { type: Boolean, default: false }
});

module.exports = mongoose.model('TaskTracking', taskTrackingSchema);
