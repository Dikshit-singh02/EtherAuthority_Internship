const express = require('express');
const router = express.Router();
const TaskTracking = require('../models/TaskTracking');
const InternProfile = require('../models/InternProfile');

// POST /api/task/submit - Submit a task
router.post('/submit', async (req, res) => {
  try {
    const { internId, taskName, taskDescription } = req.body;

    // Check if intern exists
    const intern = await InternProfile.findById(internId);
    if (!intern) {
      return res.status(404).json({ error: 'Intern not found' });
    }

    const newTask = new TaskTracking({
      internId,
      taskName,
      taskDescription
    });

    await newTask.save();

    // Update intern's total tasks
    intern.totalTasks += 1;
    await intern.save();

    res.status(201).json({ message: 'Task submitted successfully', task: newTask });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

// GET /api/task/:internId - Get tasks for an intern
router.get('/:internId', async (req, res) => {
  try {
    const tasks = await TaskTracking.find({ internId: req.params.internId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

module.exports = router;
