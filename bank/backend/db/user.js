import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bankuserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    accountno: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export var User = mongoose.model('bankuser', bankuserSchema);

