import React from "react";
import "./Result1.css";
import "../../index.css"
import {withRouter,Link} from "react-router-dom"

import playLogo from "../../images/1-2-0-home-discovery-expanded-ic-play-16820540-032C-45D6-9A37-4281A8268F96@3x.png"


class Result1 extends React.Component {
 
  render() {
    const {
      icPlay,
      className,
      id,
      title,
      description,
      thumbnails,
      channelTitle,
      publishTime,
      thumbnail,
      channelId
    } = this.props;

    // enables to click a tag inside Link tag
    const stopEvent = (event) => event.stopPropagation();

    return (
      <div className={`result1 ${className || ""}`}>
        <div className="ils-aimaient-la-vie-4" style={{ backgroundImage: `url(${thumbnails.medium.url})` }}>
        <div className="playlogo play-container1" >
              <img className="playlogo play-btn-playlist1"  src={playLogo}/>
            </div>
          {/*<div className="ils helveticaneue-normal-white-22px">ils</div>*/}

          {/*<p className="textlabel-7 helveticaneue-normal-white-16px">*/}
            {/*<span className="span-11 helveticaneue-normal-white-16px">spanText</span>*/}
            {/*<span className="span-12 lucidagrande-normal-white-16px">spanText2</span>*/}
            {/*<span className="span-11 helveticaneue-normal-white-16px">spanText3</span>*/}
            {/*<span className="span-12 lucidagrande-normal-white-16px">spanText4</span>*/}
            {/*<span className="span-11 helveticaneue-normal-white-16px">spanText5</span>*/}
          {/*</p>*/}


        </div>
        <div className="flex-col-8 result-item-text">
          <div className="netflix-dcouvert-2 helveticaneue-normal-screamin-green-21px">{title}</div>
          <div className="flex-row-6">
            <a href={`https://www.youtube.com/channel/${channelId}`} onClick={stopEvent}>
              
            <img className="ic-play-3" style={{height: "30px", width: "30px"}} src={thumbnail} />
            
            </a>
            
            <div className="code-ninja helveticaneue-normal-screamin-green-14px">{channelTitle}</div>
          </div>
          <p className="andrzej-wajda-roman-2 helveticaneue-normal-screamin-green-14px-2">{description}</p>
        </div>
      </div>
    );
  }
}


export default withRouter(Result1)
