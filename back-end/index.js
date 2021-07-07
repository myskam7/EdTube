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

const FilterSearch = require('./apis/searchFilter');
const {PopularVideos,getData} = require('./apis/YouTubeApi');


// SEARCH BY QUERY (name="")
app.get('/search',  function (req, res, next){
    const userSearch =  FilterSearch(req.query.name);
    // console.log("data", await )

    // await getData(userSearch);
    getData(userSearch).then(response => res.send({"data": response}) )


    console.log("data", )
    // return
})
// SEARCH BY QUERY (name="")
app.get('/api', async function (req, res, next){
    return res.json( {title: "hello"})
})

// Home Page
app.get('/', async function (){
    return PopularVideos();
})


app.set('json spaces', 10);
app.listen(process.env.SERVER, function (){
    console.log("Connected to Server")
})













