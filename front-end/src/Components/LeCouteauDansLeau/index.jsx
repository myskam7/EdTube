import React from "react";
import "./LeCouteauDansLeau.css";

class LeCouteauDansLeau extends React.Component {
  render() {
    const { hq7204, icPlayCopy3, leCouteauDansLEa, spanText, spanText2, spanText3, spanText4, spanText5 } = this.props;

    return (
      <div className="le-couteau-dans-leau">
        <img className="hq720-4" src={hq7204} />
        <div className="flex-col-2">
          <img className="ic-play-copy-3" src={icPlayCopy3} />
          <div className="le-couteau-dans-lea helveticaneue-normal-white-22px">{leCouteauDansLEa}</div>
          <p className="x1962-thriller helveticaneue-normal-white-16px">
            <span className="span-6 helveticaneue-normal-white-16px">{spanText}</span>
            <span className="span-7 lucidagrande-normal-white-16px">{spanText2}</span>
            <span className="span-6 helveticaneue-normal-white-16px">{spanText3}</span>
            <span className="span-7 lucidagrande-normal-white-16px">{spanText4}</span>
            <span className="span-6 helveticaneue-normal-white-16px">{spanText5}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default LeCouteauDansLeau;
