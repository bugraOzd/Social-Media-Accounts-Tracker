// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/socialMediaDB', { useNewUrlParser: true, useUnifiedTopology: true });

const SocialMedia = require('./models/SocialMedia');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.post('/submit', async (req, res) => {
  const { socialMediaLink, socialMediaName, description } = req.body;
  try {
    const newEntry = new SocialMedia({ socialMediaLink, socialMediaName, description });
    await newEntry.save();
    res.status(200).json({ message: 'Form data received successfully', data: newEntry });
  } catch (error) {
    res.status(500).json({ message: 'Error saving data', error });
  }
});

app.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { socialMediaLink, socialMediaName, description } = req.body;
  try {
    const updatedEntry = await SocialMedia.findByIdAndUpdate(id, { socialMediaLink, socialMediaName, description }, { new: true });
    if (updatedEntry) {
      res.status(200).json({ message: 'Form data updated successfully', data: updatedEntry });
    } else {
      res.status(404).json({ message: 'Data not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating data', error });
  }
});

app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEntry = await SocialMedia.findByIdAndDelete(id);
    if (deletedEntry) {
      res.status(200).json({ message: 'Form data deleted successfully', data: deletedEntry });
    } else {
      res.status(404).json({ message: 'Data not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting data', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
