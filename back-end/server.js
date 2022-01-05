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
// const { default: App } = require('../front-end/src/App');
const youtube = google.youtube('v3');
var etag = require('etag')


// app.set('etag', 'strong');  

const FilterSearch = require('./apis/searchFilter');
const {
    PopularVideos,
    getData, 
    getRelatedPlaylist,
    getChannelProfile,
    getVideoComments
} = require('./apis/YouTubeApi');


// __________________________________________________________________________________

// GET - VIDEO'S COMMENTS {params: }
app.get('/comments', function(req, res){
    let id = req.query.id;
    getVideoComments(id)
    .then(response => {
        res.send({"data": response })
    })
})

// GET - CHANNEL DETAILS {params: channelID(s)}
app.get('/channel', function(req, res){
    let id = req.query.id;
    // sample param "UC8butISFwT-Wl7EV0hUK0BQ,UC_x5XG1OV2P6uZZ5FSM9Ttw"
    getChannelProfile(id)
    .then(response => res.send({"data": response}))
})

// GET - POPULAR VIDEOS LIST(test){params: null}
app.get('/popular', async function (req, res, next){
    let id = req.query.id;
    // sample param "g2nMKzhkvxw,k67TMBC6tyo"
    await PopularVideos(id)
    .then(response => res.send({response}) )
})

// GET - SEARCH RELATED PLAYLIST ON THE CURREINT VIDEO
app.get('/videoplayer_playlist', function(req, res){

    
   /*
    ETAG FOR WHEN USING NODE WITH WEBBROSER
    console.log(req.body)
    const body = {
        post: req.body.post,
        created: new Date()
      }; 
      */
    let query = req.query;
    
    "Strapi Crash Course (with React & GraphQL) #14 - Rich Text Content"
    getRelatedPlaylist(query.title, query.channelId)
    .then(response => {
        // res.append('Last-Modified', (new Date(lastModifiedStringDate)).toUTCString());
        // res.setHeader('ETag', etag(body));
        res.send({"data": response}) })
})

// GET - SEARCH TERM Search bar {params: string}
app.get('/search',  function (req, res, next){
    const name = FilterSearch(req.query.name);
    getData(name)
    .then(response => res.send({"data": response}) )
})

// Dashboard 
app.get('/',  function (req, res, next){
    // PopularVideos()
    // .then(response => res.send({response}))
});

// // GET - SEARCH BY QUERY (name="")
// app.get('/api', async function (req, res, next){
//     return res.json( {title: "hello"})
// })


app.set('json spaces', 10);
app.listen(process.env.SERVER, function (){
    console.log("Connected to Server")
})













