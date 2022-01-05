import React from "react";
import "./Result1Copy.css";

class Result1Copy extends React.Component {
  render() {
    const { hq7202, netflixDcouvert, codeNinja, icPlayCopy, className } = this.props;

    return (
      <div className={`result1-copy-1 ${className || ""}`}>
        <div className="overlap-group-4">
          <div className="ils-aimaient-la-vie-5">
            <img className="hq720-2" src={hq7202} />
            <div className="flex-col-11">
              <p className="netflix-dcouvert-4 helveticaneue-normal-jelly-bean-16px">{netflixDcouvert}</p>
              <div className="code-ninja-2 helveticaneue-normal-emerald-11px">{codeNinja}</div>
            </div>
          </div>
          <img className="ic-play-copy" src={icPlayCopy} />
        </div>
      </div>
    );
  }
}

export default Result1Copy;
