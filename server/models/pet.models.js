const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be longer than 3 characters"]
    },
    petType: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be longer than 3 characters"]
    },
    petDescription: {
        type: String,
        required: [true, "Pet description is required"],
        minlength: [3, "Pet description must be longer than 3 characters"]
    },
    skills1: {
        type: String
    },
    skills2: {
        type: String
    },
    skills3: {
        type: String
    }
}, {timestamps: true});

const Pet = mongoose.model('Pet', PetSchema)
module.exports = Pet