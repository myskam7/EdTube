import React from "react";
import "./ThirdRowChannels.css";

class ThirdRowChannels extends React.Component {
  render() {
    const { programmesOriginaux, icArrowCopy, x302, x301, x307, x305, x306, x304, x303 } = this.props;

    return (
      <div className="third-row-channels">
        <div className="flex-row-2">
          <div className="programmes-originaux helveticaneue-normal-white-20px">{programmesOriginaux}</div>
          <img className="ic-arrow-copy" src={icArrowCopy} />
        </div>
        <div className="flex-row-3">
          <img className="x3-02" src={x302} />
          <img className="x3-0" src={x301} />
          <img className="x3-0" src={x307} />
          <img className="x3-0" src={x305} />
          <img className="x3-0" src={x306} />
          <img className="x3-0" src={x304} />
          <img className="x3-03" src={x303} />
        </div>
      </div>
    );
  }
}

export default ThirdRowChannels;
