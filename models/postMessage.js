import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  name: String,
  title: String,
  message: String,
  tags: [String],
  photo: String,
  loveCount: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
