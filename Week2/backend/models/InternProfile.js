const mongoose = require('mongoose');

const internProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  walletAddress: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
  totalTasks: { type: Number, default: 0 },
  totalRewards: { type: Number, default: 0 },
  nftsOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NFTRecord' }]
});

module.exports = mongoose.model('InternProfile', internProfileSchema);
