import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Post = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    cotagory: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export default mongoose.model('Post', Post);