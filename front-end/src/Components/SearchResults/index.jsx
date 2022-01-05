import React from "react";
import axios from "axios";
import queryString from 'query-string'

import {Link, Switch, Route} from "react-router-dom";
import IconsChevronLeft from "../IconsChevronLeft";
import Result1 from "../Result1";
import "./SearchResults.css";
import "../../index.css"
import resultsSample from "../../DummyData/YouTubeSearchSample.json"


class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: null,
      channelId: null,
      search: queryString.parse(props.location.search).name,
      searchStr: props.location.text
    }
    this.searchHandler = this.searchHandler.bind(this)
  }

  //SEARCH HANDLER
  searchHandler(searchQuery){
    let channelArray = [];
     const channelString = channelArray.join("");

     //Return search results
     axios.get(`/search?name=${searchQuery}`)
     .then((response) => {
           this.setState({data: response.data.data.items});
     })
     .then(() => {   // PULL OUT ID'S AND AND RUN THROUGH CHANNELS API
      return Promise.all([ 
         this.state.data.map(item => {
           channelArray.push(item.snippet.channelId);
         }),
       axios.get(`/channel`, {params : {id: channelArray.join(", ")}})
   
     ]).then(([res1,res2,]) => {

             // REDUCE RESULTS response to obj AND ASSIGN TO OBJ
             let newResult = res2.data.data.items.reduce(function(acc, curr) {
               // acc is accumulator which is the required object.
               // this will create a nee key in accumulator and will set its value
               acc[curr["id"]] = {
                 Thumbnail: curr.snippet.thumbnails.default.url
               }
               return acc;
             },{})
             
             this.setState({
               isLoaded: true,
               channelId: newResult,
               search: searchQuery
             })
         },
          // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
         (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
     },
     (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )}

//  req for channel data from result data passed*
//  then setState

// *decide where to call search API from
    componentDidMount() {
      return this.searchHandler(this.props.location.searchStr)
  }
  
  //   componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   console.log(this.props.location.searchStr,prevProps.location.searchStr)
  //   console.log(this.props.location.searchStr !== prevProps.location.searchStr)
  //   // console.log(this.props.location.search, prevProps.location.search); 
  //   if (this.props.location.searchStr !== prevProps.location.searchStr) {
  //     // this.fetchData(this.props.userID);
  //     // Promise.all([
  //     //   this.setState({
  //     //     data: [],
  //     //     channelId: [],
  //     //     search: queryString.parse(this.props.location.search).name
  //     //   }),
  //        return this.searchHandler(queryString.parse(this.props.location.search).name)
  //     // ]).then(([res1, res2]) => {
  //     //   console.log([res1, res2])
  //     // },
  //     // (error) => {
  //     //   this.setState({
  //     //     isLoaded: true,
  //     //     error
  //     //   });
  //     // })
  
  //   }
  // }

  componentWillUnmount() {
   return this.setState({
      isLoaded: false,
     data: null,
     channelId: null,
   })
    // return this.searchHandler(this.props.location.searchStr)
}



  render() {
    const {
      logoNetflix,
      jeunesse,
      icNotification,
      placeholderAvatar,
      icDropdown,
      spanText,
      spanText2,
      spanText3,
      search,
      line,
      iconsChevronLeftProps,
      result1Props,
      result12Props,
      result13Props,
    } = this.props;

    const { error, isLoaded, data } = this.state;

    console.log(resultsSample.data.items[0].snippet.channelId)

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div className="container-center-horizontal">
            <div className="searchresults screen">
              {/*<div className="nav-bar-2">*/}
              {/*  <img className="logo-netflix-2" src={logoNetflix}/>*/}
              {/*  <div className="jeunesse-2 helveticaneue-normal-white-16px-2">{jeunesse}</div>*/}
              {/*  <img className="ic-notification-2" src={icNotification}/>*/}
              {/*  <img className="placeholder-avatar-2" src={placeholderAvatar}/>*/}
              {/*  <img className="ic-dropdown-2" src={icDropdown}/>*/}
              {/*</div>*/}
              {/*<IconsChevronLeft src={iconsChevronLeftProps.src} />*/}
              <div className="results-page-searchbar">
                <div className="overlap-group-1">
                  <div className="react-tutorial-1 helvetica-normal-cerulean-60px">
                    <span className="span-10 helvetica-normal-cerulean-60px">{spanText}</span>
                    <span className="span2">{spanText2}</span>
                    <span className="span-10 helvetica-normal-cerulean-60px">{spanText3}</span>
                  </div>
                  <div className="search-3">{search}</div>
                  <img className="line" src={line}/>
                </div>
              </div>
              <div className="search-results">
                <ul className="list-item">
                {

                  console.log("data",data),

                  data.map(item => {
                    console.log(this.state.channelId[item.snippet.channelId])
                 return (<li key={item.id.videoId}>
                    <Link className="a-tag" to={{
                      pathname: "/video-player",
                      state: {
                        title: item.snippet.title,
                        channelId: item.snippet.channelId,
                        id: item.id.videoId,
                      },
                    }}>
                      <Result1 
                        thumbnail={this.state.channelId[item.snippet.channelId].Thumbnail}
                        // thumbnail={"hell"}

                        id={item.id.videoId}
                        {...item.snippet}
                       />
                    </Link>
                  </li>)})
                }
                  </ul>
              </div>
            </div>
          </div>
      );
    }
  }
}

export default SearchResults;
