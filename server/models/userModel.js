import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cluster: { type: String },
  token: { type: String },
});

export default mongoose.model('user', userSchema);