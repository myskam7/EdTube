const mongoose = require('mongoose');

const SearchedKeyWords = mongoose.Schema({
    Id: String,
    Count: Number,
    Date: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('SearchedKeyWords', SearchedKeyWords);

