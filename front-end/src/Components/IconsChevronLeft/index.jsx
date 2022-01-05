import React from "react";
import "./IconsChevronLeft.css";

class IconsChevronLeft extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <div className={`icons-chevron-left ${className || ""}`}>
        <img className="color" src={src} />
      </div>
    );
  }
}

export default IconsChevronLeft;
