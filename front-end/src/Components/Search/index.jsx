import React from "react";
import "./Search.css";

class Search extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <div className={`search ${className || ""}`}>
        <div className="rectangle border-1px-mountain-mist-2"></div>
        <img className="ic-search" src={src} />
      </div>
    );
  }
}

export default Search;
