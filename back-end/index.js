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

const FilterSearch = require('./apis/searchFilter');

const youtube = google.youtube('v3');


// SEARCH BY QUERY (name="")
app.get('/search', async function (req, res, next){
    console.log(await FilterSearch(req.query.name));

    const userSearch = await FilterSearch(req.query.name);


    // console.log(req.query.name);

   async function getData(err, response, body) {
        await youtube.search.list({
            key: process.env.YOUTUBE_KEY,
            part: 'snippet',
            keyword: 'react',
            relevanceLanguage: "en",
            // topicId: "m/01k8wb",
            videoCategoryId: 27,
            type: 'video',
            // relatedToVideoId: "QFaFIcGhPoM",
            q: userSearch

        } ).then(res => {
            console.log(res.data.items[0]); // Logging the output within the request function
            // res.json(res)
           // return body = res,data.items

        }).catch((err) => {
            if (typeof err.text === 'function') {
                err.text().then(errorMessage => {
                    this.props.dispatch(displayTheError(errorMessage))
                });
            } else {
                res.status(404).json(err.message)
            }
        })
       // console.log(err, response, body )
    }
     return getData();


})


app.set('json spaces', 10);

app.listen(process.env.SERVER, function (){
    console.log("Connected to Server")
})













