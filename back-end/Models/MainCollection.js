const mongoose = require('mongoose');
const VideoWatched = require('./VideoWatched');
const SearchedKeyWords = require('./SearchedKeyWords');


const MainCollection = mongoose.Schema({
    SearchedKeyWords: [SearchedKeyWords],
    SearchedKeyWords: [VideoWatched]
})


module.exports = mongoose.model('MainCollection', MainCollection, 'maincollection');

