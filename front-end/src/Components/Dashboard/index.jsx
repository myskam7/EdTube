import React from "react";
import axios from 'axios';

import Hero from "../Hero";
import NavBar from "../NavBar";
import FirstRow from "../FirstRow/index";
import Head from "../Head";
import IlsAimaientLaVie from "../IlsAimaientLaVie";
import ColdWar from "../PlaylistCard";
import LeCouteauDansLeau from "../LeCouteauDansLeau";
import Tabs from "../Tabs";
import ThirdRowChannels from "../ThirdRowChannels";
import Categories from "../Categories";
import Footer from "../Footer";
import "./Dashboard.css";
import PopularVideoButton from "../Buttons/popularVideoButton"

import DiscoverPlaylist from "../DiscoverPlaylist/DiscoverPlaylist";
// import '../dashboard.css'

import YtPop_sample from "../../DummyData/YoutubePopular_Sample"



class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults : [],
      playlist: null,
      error: false,
    }
    this.dataHandler = this.dataHandler.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }


  componentDidMount(){
    axios.get('/popular', {params: {id: "g2nMKzhkvxw,k67TMBC6tyo"}})
    .then((res) => {
      console.log("popular res", res)
      // return this.props.dataHandler(response.data.data);
  })
  .catch(err => err)

  }

  //listerner to check if search came back with data
  async dataHandler(data) {

    for(var key in data.items) {
      let item = data.items[key];

      // console.log("res sample data", data.items[key])
      // console.log("searchResults", this.state.searchResults)

      await this.setState({searchResults: [...this.state.searchResults, {
          id: item.id.videoId,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
          title: item.snippet.title,
          channelId: item.snippet.channelId,
          description: item.snippet.description,
          link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          thumbnails: item.snippet.thumbnails
        }]
      })
    }

    // this.setState({isLoading: false});
  }


  //clear results when searching
  clearResults () {
    this.setState({   searchResults : []})
  }



  render() {
    const {
      bgPoland,
      icClose,
      ida,
      icPlay,
      name,
      text_Label,
      heroProps,
      navBarProps,
      firstRowProps,
      firstRow2Props,
      headProps,
      ilsAimaientLaVieProps,
      coldWarProps,
      leCouteauDansLeauProps,
      tabsProps,
      thirdRowChannelsProps,
      categoriesProps,
      footerProps,
    } = this.props;

    return (
      <div class="container-center-horizontal">
        <div className="dashboard screen" style={{margin: "auto", }}>
          {/* <NavBar
              edTubeLogo={logo}
              jeunesse={navBarProps.jeunesse}
              icNotification={navBarProps.icNotification}
              placeholderAvatar={navBarProps.placeholderAvatar}
              icDropdown={navBarProps.icDropdown}
              searchProps={navBarProps.searchProps}
          /> */}
          <div className="overlap-group">

            <Hero {...YtPop_sample} {...heroProps} />

          </div>
          <div className="playlist">
            <FirstRow  {...firstRowProps} />
            {/*<FirstRow  {...firstRowProps} />*/}
            {/*<FirstRow  {...firstRowProps} />*/}
            <DiscoverPlaylist bgPoland={bgPoland}
                              icClose={icClose}
                              headProps={headProps}
                                ida={ida}
                                name={name}
                                text_Label={text_Label}
                              {...ilsAimaientLaVieProps}
                              coldWarProps={coldWarProps}
                              {...leCouteauDansLeauProps}/>

            {/*<ThirdRowChannels {...thirdRowChannelsProps} />*/}
            <Categories {...categoriesProps} />
          </div>
          <Footer {...footerProps} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
