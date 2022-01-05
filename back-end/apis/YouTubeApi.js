require('dotenv').config();
const fs = require('fs');
const {google} = require('googleapis');
const youtube = google.youtube('v3');

const playlistChecker = require("./PlaylistChecker");

// GET - AUTHENTICATION

// GET - PLAYLIST VIDEOS

// GET - VIDEO'S COMMENTS LIST
async function getVideoComments(videoId){
    return await youtube.commentThreads.list({
        key: process.env.YOUTUBE_KEY,
        part: 'snippet, replies',
        maxResults: 20,
        videoId: videoId
    }).then(res => {
        let {data} = res;
    // Pull out specific data from response
       data = data.items.map(item => ({
           text: item.snippet.topLevelComment.snippet.textDisplay,
           timePosted: item.snippet.topLevelComment.snippet.publishedAt,
        //    ** add replies data in the future: 
        }));
               return data
       })
        .catch((err) => {
        if (typeof err.text === 'function') {
            err.text().then(errorMessage => {
                this.props.dispatch(displayTheError(errorMessage))
            });
        } else {
            // err.status(404).json(err.message)
          return err.message
        }
    })
}


// GET - CHANNEL'S PROFILE 
async function getChannelProfile(chanId){
    return await youtube.channels.list({
        key: process.env.YOUTUBE_KEY,
        part: 'snippet, contentDetails, statistics',
        id: chanId
    }).then(res => {
        const {data} = res;
       //  console.log("res", data)
               return data
       })
        .catch((err) => {
        if (typeof err.text === 'function') {
            err.text().then(errorMessage => {
                this.props.dispatch(displayTheError(errorMessage))
            });
        } else {
            // err.status(404).json(err.message)
          return err.message
        }
    })
}


// GET - SEARCH RESULTS
 async function getData(userSearch) {
   return await youtube.search.list({
        key: process.env.YOUTUBE_KEY,
        part: 'snippet',
        keyword: 'react',
        relevanceLanguage: "en",
        // topicId: "m/01k8wb",
        videoCategoryId: 27,
        type: 'video',
        // relatedToVideoId: "QFaFIcGhPoM",
        q: userSearch
    }).then(res => {
        const {data} = res;
       //  console.log("res", data)
               return data
       })
           .catch((err) => {
        if (typeof err.text === 'function') {
            err.text().then(errorMessage => {
                this.props.dispatch(displayTheError(errorMessage))
            });
        } else {
            // err.status(404).json(err.message)
          return err.message
        }
    })
}


// GET - POPULAR VIDEOS FOR THE HOME PAGE
async function PopularVideos(id){
   return await youtube.videos.list({
        part: "snippet,contentDetails,statistics",
        relevanceLanguage: "en",
        // chart: "mostPopular",
        // regionCode: "US",
        maxResults: 10,
        id: id,
        videoCategoryId: 27,
        key: process.env.YOUTUBE_KEY
        
    }).then(res => {
        console.log(res.data); // Logging the output within the request function
        // const {data} = res;
         console.log("res", data)
                return res.data
    }).catch((err) => {
        if (typeof err.text === 'function') {
            err.text().then(errorMessage => {
                this.props.dispatch(displayTheError(errorMessage))
            });
        } else {
            // err.status(404).json(err.message)
          return err.message
        }
    })
}


// GET - SEARCH FOR RELATED PLAYLISTS
async function getRelatedPlaylist(title, channelId) {
    return await youtube.search.list({
         key: process.env.YOUTUBE_KEY,
         part: 'snippet',
         maxResults: 50,
         type: 'playlist',
         q: playlistChecker(title),
         channelId: channelId
        
    })
    // .then(res => {
    //     // console.log("playlistId", res)
    //      const {playlistId} = res.data.items[0].id;
        

    //         return youtube.playlistItems.list({
    //         key: process.env.YOUTUBE_KEY,
    //         part: 'snippet, contentDetails',
    //         maxResults: 50,
    //         type: 'playlist',
    //         playlistId: playlistId
           
    //      })
         .then(res => {
            const {data} = res;
            // console.log("res", res.data.items);
            return data
        // })
    })
    .catch((err) => {
         if (typeof err.text === 'function') {
             err.text().then(errorMessage => {
                 this.props.dispatch(displayTheError(errorMessage))
             });
         } else {
            //  err.status(404).json(err.message)
           return err.message
         }
     })
 }




 module.exports = {
    getData,
    PopularVideos,
    getRelatedPlaylist,
    getChannelProfile,
    getVideoComments
};
