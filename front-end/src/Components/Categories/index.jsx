import React from "react";
import "./Categories.css";
import {logos} from "./Logos.js"

class Categories extends React.Component {
  render() {
    const {
      catgories,
      comdie,
      react,
      icArrowCopy2,
      action,
      javascript,
      icArrowCopy3,
      drame,
      nodejs,
      icArrowCopy4,
      sciFi,
      mongodb,
      icArrowCopy5,
      romance,
      price,
      icArrowCopy6,
      thriller,
      sql,
      icArrowCopy7,
      python,
      python2,
      icArrow,
    } = this.props;

    //create category item
    const GenerateCategory = (category) => {
        return (
            <>
                <li className="comdie" >
                    {/*<div className="react logo-text helveticaneue-normal-white-20px">{category.name}</div>*/}
                    <button style={{background: "none", border: "none"}}>
                        <img className="ic-arrow-copy-2" src={category.location} />
                    </button>
                </li>
            </>
        )
      }


    const categories = logos.Categories;
    return (
      <div className="categories" >
              <div className="flex-col-4-cat">
                  <div className="catgories helveticaneue-normal-white-20px">{catgories}</div>
              </div>
          <div>
              <ul className="list-items">
                  {
                      categories.map(category => GenerateCategory(category))
                  }
              </ul>
          </div>


      </div>
    );
  }
}

export default Categories;
