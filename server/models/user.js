import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
    },
    bio: {
        type: String,
    },
    role: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

User.pre('save', function (next) {
    if(!this.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) =>{
        if(err) return next(err);

        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;

            next();
        })
    })
})


export default mongoose.model('User', User);
