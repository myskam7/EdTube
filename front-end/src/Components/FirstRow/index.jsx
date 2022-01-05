import React from "react";
import "./FirstRow.css";
import PopularVideoButton from "../Buttons/popularVideoButton"
import YtPop_sample from "../../DummyData/YoutubePopular_Sample.json"

class FirstRow extends React.Component {
  render() {
      //Gen list
      function genList(arr) {
         return  arr.map((a) => (
             <>
                <PopularVideoButton id={a.id.videoId} img={a.snippet.thumbnails.medium.url}/>
              </>
          ))
      }

    return (
      // <div className={`first-row ${className || ""}`}>
      <div className="">
        <div className="flex-col">
          <div className="revoir helveticaneue-normal-white-20px">Popular</div>
        </div>
        <div className="" >
        <ul className=" list-items">
            {
                genList(YtPop_sample.items)
            }
        </ul>
        {/* <div className="shadow"></div> */}
        </div>
        
      </div>
    );
  }
}

export default FirstRow;
