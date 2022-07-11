const mongoose = require('mongoose');

// create schema
const receipeSchema = new mongoose.Schema({
    _id: String,
    name: String,
    ingredients: String,
    instructions: String,
    completion_time: String
});

// create model
const storedReceipes = mongoose.model('storedReceipes', receipeSchema);
const deletedReceipes = mongoose.model('deletedReceipes', receipeSchema);

module.exports = {
    storedReceipes,
    deletedReceipes
};