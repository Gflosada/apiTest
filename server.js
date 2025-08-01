import express from 'express';
import connectDB from './config/db.js';
import itemRoutes from './routes/itemRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', itemRoutes);

// Connect DB and start server
connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
