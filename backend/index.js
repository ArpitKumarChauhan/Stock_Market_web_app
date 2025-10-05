require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;


const app = express();


app.listen(PORT, () => {
    console.log('Server is running on port 5000!');
    mongoose.connect(URL);
    console.log('Connected to MongoDB');
});