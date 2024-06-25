import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import bookRoute from './route/book.route.js';

const app = express();

app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to mongodb
try {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB connected...');
} catch (error) {
  console.log("Error: ", error);
}

// Defining routes
app.use('/books', bookRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// app.get('/', (req, res) => {
//   res.send('Hello!');
// });