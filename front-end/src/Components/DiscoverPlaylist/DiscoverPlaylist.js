import React, {Component} from 'react';
import Head from "../Head";
import IlsAimaientLaVie from "../IlsAimaientLaVie";
import Tabs from "../Tabs";
import PlaylistCard from "../PlaylistCard";
import "./DiscoverPlaylist.css"
import PopularVideoButton from "../Buttons/popularVideoButton";
import YT_Playlist_Sample from "../../DummyData/YouTubePlaylist_Sample.json"

class DiscoverPlaylist extends Component {
    render() {
        const {
            bgPoland,
            icClose,
            ida,
            icPlay,
            name,
            textLabel,
            headProps,
            ilsAimaientLaVieProps,
            coldWarProps,
            leCouteauDansLeauProps,
        } = this.props;

        const array = [1,2,3,4,5];


        //Gen list
        function genList(arr) {
            return  arr.map((a) => (
                <li className="playlist-li">
                    <PlaylistCard className="list-items"
                                  coldWar={coldWarProps.coldWar}
                                  icPlayCopy2={a.snippet.thumbnails.maxres.url}
                                  coldWar2={coldWarProps.coldWar2}
                                  text_Label={coldWarProps.text_Label}
                    />
                    <h2>Title</h2>
                </li>
            ))
        }

        return (
            <>
                <div className="discovery" >
                    <div className="overlap-group1" >
                        <div className="head-container" style={{
                                backgroundImage: `url(${YT_Playlist_Sample.items[0].snippet.thumbnails.maxres.url})`,
                                backgroundSize: "cover"
                             }}>
                            <img className="bg-poland" />

                        </div>
                        <div className="content">
                            <Head
                                logoAgePolonais={headProps.logoAgePolonais}
                                netflixDcouvert={headProps.netflixDcouvert}
                                andrzejWajdaRoman={headProps.andrzejWajdaRoman}
                            />

                            <div className="film-list">
                                <ul className="list-items">
                                    {genList(YT_Playlist_Sample.items)}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default DiscoverPlaylist;