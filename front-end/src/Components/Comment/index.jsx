import React from "react";
import "./Comment.css";

class Comment extends React.Component {
  render() {
    const { comment, reply, className } = this.props;
    console.log("comments:",this.props.comment[0].data)
    return (
      // <div className={`comment ${className || ""}`}>
      <>
      {
        comment[0].data.map(item => (
      <li style={{textDecoration: "none", display:"flex", flexDirection:"column", padding: "2rem",height: "8rem", width: "55rem"}} key={item.timePosted} >
        <div style={{display:"flex", flexDirection:"row",minWidth: "30px"}} className="overlap-group-3">
          <div style={{ backgroundColor: "orchid",display:"flex", alignSelf: "inherit"}} className="oval-5-copy"></div>
          <div>
          <p className="andrzej-wajda-roman-4 helveticaneue-normal-jelly-bean-12px">{item.text}</p>
          </div>
           
        </div>
        <div>
          <div className="reply helveticaneue-normal-new-car-14px">{reply}</div>
        </div>
        
      </li>
        ))
      }
      </>
    );
  }
}

export default Comment;
// comment[0].data[0].text

