const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String, required: true},
    price: {type: Number, required: true},
    imageUrl: { type: String, required: true},
    author: { type: String, required: true},
    quantity: {type: Number, required: true},
});

module.exports = mongoose.model('Book', bookSchema);

