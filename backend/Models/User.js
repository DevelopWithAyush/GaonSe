const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Fullname: {
        type: String
    },
    mobilenumber: {
        type: String,
        unique: true,
        required:true
    },
    uid: {
        type: String,
        unique: true,
        required:true
    },
    addresses: [{
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
    }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
