import React from "react";
import "./Head.css";

class Head extends React.Component {
  render() {
    const { logoAgePolonais, netflixDcouvert, andrzejWajdaRoman } = this.props;

    return (
      <div className="head">
              <img className="logo-age-polonais" src={logoAgePolonais} />
        <div className="netflix-dcouvert helveticaneue-normal-white-26px">{netflixDcouvert}</div>
        <div className="andrzej-wajda-roman helveticaneue-normal-white-20px-2">{andrzejWajdaRoman}</div>
      </div>
    );
  }
}

export default Head;
