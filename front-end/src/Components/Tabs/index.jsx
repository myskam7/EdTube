import React from "react";
import "./Tabs.css";

class Tabs extends React.Component {
  render() {
    const { text_Label, laNouvelleVagueFr, directionCannesMa, bollywoodClassiques } = this.props;

    return (
      <div className="tabs">
        <div className="titles">
          <div className="textlabel-5 helveticaneue-normal-red-20px-2">{text_Label}</div>
          <div className="la-nouvelle-vague-fr helveticaneue-normal-red-20px">{laNouvelleVagueFr}</div>
          <div className="direction-cannes-ma helveticaneue-normal-red-20px">{directionCannesMa}</div>
          <div className="bollywood-classiques helveticaneue-normal-blue-20px">{bollywoodClassiques}</div>
        </div>
        <div className="underline border-1px-mjarny"></div>
      </div>
    );
  }
}

export default Tabs;
