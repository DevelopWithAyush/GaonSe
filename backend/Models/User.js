const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    ph: {
        type: String,
        unique: true,
        required: true
    },
    pincode: {
        type: String
    },
    flatno: {
        type: String
    },
    area: {
        type: String
    },
    landmark: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
