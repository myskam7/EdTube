import React from "react";
import Search from "../Search";
import "./NavBar.css";
import "../dashboard.css"
import SearchBar from "../SearchBar";


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults : [],
            error: false,
        }

        this.dataHandler = this.dataHandler.bind(this);
        this.clearResults = this.clearResults.bind(this);
    }

    async dataHandler(data) {

        for(var key in data.items) {
            let item = data.items[key];

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
    const { edTubeLogo, jeunesse, icNotification, placeholderAvatar, icDropdown, className, searchProps } = this.props;

    return (
      <div className={`nav-bar ${className || ""}`} style={{width: "100%"}}>
          <div className="logo-edtube-container">
              <div className="logo-edtube" />
          </div>

          {/* <div className="search_bar"> */}
              <SearchBar clearResults={this.clearResults} dataHandler={ this.dataHandler} />
          {/* </div> */}
        {/*<div className="jeunesse helveticaneue-normal-white-16px-2">{jeunesse}</div>*/}

        <div className="user-opt">
            <img className="ic-notification" src={icNotification} />
            <img className="placeholder-avatar" src={placeholderAvatar} />
            <img className="ic-dropdown" src={icDropdown} />
        </div>

      </div>
    );
  }
}

export default NavBar;
