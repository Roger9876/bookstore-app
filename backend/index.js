import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';

const app = express();

app.use(cors());

app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to mongodb
try {
  mongoose.connect(MONGODB_URI, {
  });
  console.log('MongoDB connected...');
} catch (error) {
  console.log("Error: ", error);
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Defining routes
app.use('/books', bookRoute);
app.use('/user', userRoute);
