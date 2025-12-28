const mongoose = require('mongoose');

const nftRecordSchema = new mongoose.Schema({
  internId: { type: mongoose.Schema.Types.ObjectId, ref: 'InternProfile', required: true },
  tokenId: { type: String, required: true },
  contractAddress: { type: String, required: true },
  tokenURI: { type: String, required: true },
  nftType: { type: String, required: true },
  transactionHash: { type: String, required: true },
  mintedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('NFTRecord', nftRecordSchema);
