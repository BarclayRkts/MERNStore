const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    pictureURL: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    country: {
        type: String,
        require: false
    }
    
})

module.exports = Item = mongoose.model('item', ItemSchema);