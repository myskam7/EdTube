// Filter through the user query
// Check if query is valid
// If not return error


// Check if string combinations exist
// return new query

const exampleCombos = {
    "react": "tutorial"
};


const FilterSearch = (query) => {
    console.log("query", query);

    const searchArray = query.split(" ");

   // if exists in obj variables
    let exObj = false;
    let exObjKey = null;

   const newQuery = searchArray.filter((item) => {

       //if t, set exObj to t and exObjKey to current key item
       if(exObj === false && exampleCombos[item]){
           exObj = true;
           exObjKey = item;
           return item;

       }

       //if exObj is t set by prev index
       if(exObj){

           // if value is t then add to final array and set exObj to f
           if(exampleCombos[exObjKey] === item){
               return item
           }
           exObj = false;
       } else {return null}

    });
    console.log(newQuery);

    return newQuery.join(" ")
}

module.exports = FilterSearch;

