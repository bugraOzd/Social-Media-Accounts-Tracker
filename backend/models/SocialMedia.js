// models/SocialMedia.js
const mongoose = require('mongoose');

const SocialMediaSchema = new mongoose.Schema({
  socialMediaLink: { type: String, required: true },
  socialMediaName: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('SocialMedia', SocialMediaSchema);
