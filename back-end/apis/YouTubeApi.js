require('dotenv').config();
const fs = require('fs');
const {google} = require('googleapis');
const youtube = google.youtube('v3');

// GET - Search Results
async function getData(userSearch) {
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
        console.log(res.data.items);
        return res.data.items;
        // Logging the output within the request function
    }).catch((err) => {
        if (typeof err.text === 'function') {
            err.text().then(errorMessage => {
                this.props.dispatch(displayTheError(errorMessage))
            });
        } else {
            res.status(404).json(err.message)
        }
    })
}

// GET - Popular Videos for the home page
function PopularVideos(){
    youtube.videos.list({

        part: "snippet,contentDetails,statistics",
        relevanceLanguage: "en",
        // chart: "mostPopular",
        // regionCode: "US",
        id: "g2nMKzhkvxw,k67TMBC6tyo",
        videoCategoryId: 27,
        key: process.env.YOUTUBE_KEY

    } ).then(res => {
        console.log(res.data.items); // Logging the output within the request function
        // res.json(res)
        // return body = res,data.items

    }).catch((err) => {
     console.log(err)
})
}

module.exports = {
    PopularVideos,
    getData
};