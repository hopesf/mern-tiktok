import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String,
    messages:String,
    desc:String,
    shares:String,
});

export default mongoose.model('videos', videoSchema);