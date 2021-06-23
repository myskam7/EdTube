/*
* TODO:
*  - create dataset method that takes keywords from user's search as params.
*  use the param to find a match, then take all the values and add them to keyword string
*  - what apis i need?
*
*
*
*
*
* */

require('dotenv').config()

const {google} = require('googleapis');

const youtube = google.youtube('v3');

youtube.search.list({
     key: process.env.YOUTUBE_KEY,
    part: 'snippet',
    keyword: 'coding',
    videoCategoryId: 27,
    type: 'video',
    relatedToVideoId: "_uQrJ0TkZlc",
    q: userSearch



} ).then(res => {
    console.log(res.data.items);
}).catch(err => console.log(err));




