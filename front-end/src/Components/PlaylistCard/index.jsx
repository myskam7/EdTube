import React from "react";
import "./PlaylistCard.css";

import playLogo from "../../images/1-2-0-home-discovery-expanded-ic-play-16820540-032C-45D6-9A37-4281A8268F96@3x.png"

class PlaylistCard extends React.Component {
  render() {
    const { coldWar, icPlayCopy2, coldWar2, text_Label } = this.props;

    return (
      <div className="cold-war" style={{ backgroundImage: `url(${coldWar})` }}>

          <div className="cold-war-1 helveticaneue-normal-white-22px">{coldWar2}</div>
          <p className="textlabel-3 helveticaneue-normal-white-16px">{text_Label}</p>

          {/*style={{backgroundImage: `url(${icPlayCopy2})`}}*/}
          <div  className="ic-play-copy-2">

              <div className="play-btn-playlist-cont">
                  <img className="ic-play-copy-2" src={icPlayCopy2} />
                  <div className="play-container" >
                    <img className="play-btn-playlist"  src={playLogo}/>
                  </div>
              </div>
              
              <div className="color-layer"></div>


          </div>

      </div>
    );
  }
}

export default PlaylistCard;
