const express = require('express');
const router = express.Router();

const Restaurant = require('../models/Restaurant');

// GET all restaurants or sorted selected columns
// https://localhost:3000/restaurants
router.get('/', async (req, res) => {
    try {
        const sortOrder =
            req.query.sortBy === "DESC" ? -1 : 1;
        
        if (req.query.sortBy) {
            const data = await Restaurant.find(
                {},
                {_id: 1, cuisine: 1, name: 1, restaurant_id: 1})
                .sort({ restaurant_id: sortOrder });
                
            return res.json(data);
        }
        const restaurants = await Restaurant.find({});
        res.json(restaurants);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// GET restaurants by cuisine
// http://localhost:3000/restaurants/cuisine/Japanese
router.get('/cuisine/:cuisine', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({
            cuisine: req.params.cuisine
        });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Deleicatessen cuisine, where city not equal to Brooklyn
// http://localhost:3000/restaurants/Delicatessen
router.get('/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find ({
            cuisine: 'Delicatessen',
            city: {$ne : 'Brooklyn'}
        },
        { _id: 0, cuisine: 1, name: 1, city: 1}
    ).sort({name: 1});

    res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;