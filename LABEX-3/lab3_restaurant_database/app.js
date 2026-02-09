require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const restaurantRoutes = require('./routes/restaurants');

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Restaurant API is running')
});

app.use('/restaurants', restaurantRoutes);

// Connect to MongoDB 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => 
    console.log(`Server running on port http://localhost:${PORT}`)
        );
    })
    .catch(err => console.error('MongoDB connection error:', err));

