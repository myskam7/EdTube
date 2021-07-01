const mongoose = require('mongoose');


const VideoWatched = mongoose.Schema({
    keyword_combo: Object
});


module.exports = mongoose.model('VideoWatched', VideoWatched);