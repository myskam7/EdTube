const mongoose = require('mongoose');


const VideoWatched = mongoose.Schema({
    Id: String,
    Date: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('VideoWatched', VideoWatched);

