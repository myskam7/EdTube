/*
* TODO:
*  - create dataset method that takes keywords from user's search as params.
*  use the param to find a match, then take all the values and add them to keyword string
*  - What api's do i need?
*  -
*
*
*
*
*
*
*
*
* Thumbnail templates:
https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg
https://img.youtube.com/vi/<insert-youtube-video-id-here>/1.jpg
https://img.youtube.com/vi/<insert-youtube-video-id-here>/2.jpg
https://img.youtube.com/vi/<insert-youtube-video-id-here>/3.jpg

 */


require('dotenv').config();
const express = require('express');

const app = express();
const fs = require('fs');
const {google} = require('googleapis');

const youtube = google.youtube('v3');


// SEARCH BY QUERY (name="")
app.get('/search', function (req, res){

    const userSearch = req.query.name;
    console.log(req.query.name);
    return youtube.search.list({
        key: process.env.YOUTUBE_KEY,
        part: 'snippet',
        keyword: 'coding',
        videoCategoryId: 27,
        type: 'video',
        relatedToVideoId: "_uQrJ0TkZlc",
        q: userSearch

    } ).then(res => {
        console.log(res.data.items);
        return res.data.items
    }).catch(err => console.log(err));
})


app.listen(process.env.SERVER, function (){
    console.log("Connected to Server")
})













