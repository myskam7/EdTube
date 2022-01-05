import React from "react";
import "./Hero.css";
import playImg from "../../images/1-2-0-home-discovery-expanded-ic-play-960CF728-C580-481E-9A75-1269BAD9B5BA@3x.png"

class Hero extends React.Component {
  render() {
    const { title, regardezLaSaison3, leCartelDeCaliRe, icPlay, spanText, spanText2, icPlus, myList, items } = this.props;

      console.log("items", items[0].snippet.title)
      // const api = items[0].snippet


    return (
      <>
      <div className="hero" style={{backgroundImage:`url(${items[0].snippet.thumbnails.high.url})`, backgroundSize:"cover"}}>
        <h1 className="title kailasa-normal-fantasy-89px">{items[0].snippet.title}</h1>
        <div className="description">
          <div className="regardez-la-saison-3 helveticaneue-normal-white-26px">by {items[0].snippet.channelTitle}</div>
          <div className="le-cartel-de-cali-re helveticaneue-normal-white-20px-2">{items[0].snippet.description}</div>
        </div>
        <div className="flex-row">
          {/*<div className="btn-play">*/}
          {/*  <img className="ic-play-1" src={icPlay} />*/}
          {/*  <div className="lecture helveticaneue-normal-white-16px">*/}
          {/*    <span className="span helveticaneue-normal-white-16px">{spanText}</span>*/}
          {/*    <span className="span helveticaneue-normal-white-16px">{spanText2}</span>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <button className="hero-btn">
            <div className="btn-my-list">
              <img className="ic-plus" src={playImg} />
              <div className="my-list helveticaneue-normal-white-16px">Play</div>
            </div>
          </button>

        </div>
      </div>
      </>
    );
  }
}

export default Hero;


/*

{
      "kind": "youtube#searchResult",
      "etag": "3h8Np5syAuqTEGrCl9mGpa4hObQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "PkZNo7MFNFg"
      },
      "snippet": {
        "publishedAt": "2018-12-10T14:13:40Z",
        "channelId": "UC8butISFwT-Wl7EV0hUK0BQ",
        "title": "Learn JavaScript - Full Course for Beginners",
        "description": "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/PkZNo7MFNFg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/PkZNo7MFNFg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "freeCodeCamp.org",
        "liveBroadcastContent": "none",
        "publishTime": "2018-12-10T14:13:40Z"
      }
    },

*/
