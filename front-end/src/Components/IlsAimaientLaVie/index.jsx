import React from "react";
import "./IlsAimaientLaVie.css";

class IlsAimaientLaVie extends React.Component {
  render() {
    const {
      ilsAimaientLaVie,
      icPlayCopy4,
      ilsAimaientLaVie2,
      spanText,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
    } = this.props;

    return (
      <div className="ils-aimaient-la-vie" style={{ backgroundImage: `url(${ilsAimaientLaVie})` }}>
        <img className="ic-play-copy-4" src={icPlayCopy4} />
        <div className="overlap-group4">
          <div className="ils-aimaient-la-vie-1 helveticaneue-normal-white-22px">{ilsAimaientLaVie2}</div>
          <p className="textlabel-1 helveticaneue-normal-white-16px">
            <span className="span-2 helveticaneue-normal-white-16px">{spanText}</span>
            <span className="span-3 lucidagrande-normal-white-16px">{spanText2}</span>
            <span className="span-2 helveticaneue-normal-white-16px">{spanText3}</span>
            <span className="span-3 lucidagrande-normal-white-16px">{spanText4}</span>
            <span className="span-2 helveticaneue-normal-white-16px">{spanText5}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default IlsAimaientLaVie;
