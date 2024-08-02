const express = require('express');
const router = express.Router();
const SocialMedia = require('../models/SocialMedia');

// Create a new social media item
router.post('/', async (req, res) => {
  try {
    const newSocialMedia = new SocialMedia(req.body);
    const savedSocialMedia = await newSocialMedia.save();
    res.status(201).json(savedSocialMedia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all social media items
router.get('/', async (req, res) => {
  try {
    const socialMediaItems = await SocialMedia.find();
    res.json(socialMediaItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific social media item by ID
router.get('/:id', async (req, res) => {
  try {
    const socialMediaItem = await SocialMedia.findById(req.params.id);
    if (!socialMediaItem) {
      return res.status(404).json({ message: 'Social media item not found' });
    }
    res.json(socialMediaItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a social media item
router.put('/:id', async (req, res) => {
  try {
    const updatedSocialMedia = await SocialMedia.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );
    if (!updatedSocialMedia) {
      return res.status(404).json({ message: 'Social media item not found' });
    }
    res.json(updatedSocialMedia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a social media item
router.delete('/:id', async (req, res) => {
  try {
    const deletedSocialMedia = await SocialMedia.findByIdAndDelete(req.params.id);
    if (!deletedSocialMedia) {
      return res.status(404).json({ message: 'Social media item not found' });
    }
    res.json({ message: 'Social media item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;