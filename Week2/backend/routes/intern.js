const express = require('express');
const router = express.Router();
const InternProfile = require('../models/InternProfile');

// POST /api/intern/register - Register a new intern
router.post('/register', async (req, res) => {
  try {
    const { name, email, walletAddress } = req.body;

    // Check if intern already exists
    const existingIntern = await InternProfile.findOne({ email });
    if (existingIntern) {
      return res.status(400).json({ error: 'Intern with this email already exists' });
    }

    const newIntern = new InternProfile({
      name,
      email,
      walletAddress
    });

    await newIntern.save();
    res.status(201).json({ message: 'Intern registered successfully', intern: newIntern });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

// GET /api/intern/profile/:id - Get intern profile
router.get('/profile/:id', async (req, res) => {
  try {
    const intern = await InternProfile.findById(req.params.id).populate('nftsOwned');
    if (!intern) {
      return res.status(404).json({ error: 'Intern not found' });
    }
    res.json(intern);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

module.exports = router;
