// 1. Create an array to store strings
// 2. Initiate variable i and set it to zero
// 3. Split N into array
// 4. Traverse through N
// 5. Add ““ to array[0] as initial starting point
// 6. Look for anything that isn’t “ABC”, space
// 7. Each letter that matches goes to array by nearest index
// 8. If unique symbol is found, add 1 to “i”

const stringEx = "Exploration & Prediction with SAS® Visual Statistics"
let obj;
var i;
let finalString = "";
let lastKey; //keep track of the key
// let strForApi = "";
// let endStr = "";

function checker(n){
    n = n.split("");
    console.log(n);
    obj = {};
    lastKey = null
    i = 0;
    while(i < n.length){
    
        if(n[i] === "#" || n[i] === undefined){
            console.log("STOP THE LOOP", n, i, n.length, n[i-1]);
          
            return 
        }else {
            console.log(n[i]);
        }

    if(n[i] === ' '){
        if(obj[i - 1] !== n[i]){
            lastKey += 1;
            obj[lastKey] = n[i]
        }
    }else if(n[i] === ' '){
        if(obj[i - 1] !== n[i]){
            lastKey += 1;
            obj[lastKey] = n[i]
        }
    }
    else if( n[i].match(/^[a-zA-Z0-9]*$/) !== undefined && n[i].match(/^[a-zA-Z0-9]*$/) !== null){
        lastKey += 1;
        obj[lastKey] = n[i]
        }
    // else if(
    //     n[i].match(/^[a-zA-Z0-9]*$/) === undefined 
    //     || n[i].match(/^[a-zA-Z0-9]*$/) === null){

    //     lastKey += 1;

    //     console.log((obj[lastKey - 1] === ' ') )
    
    //     if(obj[lastKey - 1] === ' '){
    //         obj[lastKey - 1] = '%22+%22'
    //         obj[lastKey] = '%22+%22';
    //     }
    //     i++;
    //     }
        i++;
    }
    

    //after
  
}


function playlistChecker(n){
    checker(n);
    for(var j in obj){
        finalString += obj[j]
    }
    
    return finalString;
    // return stringEx;
}

// console.log(playlistChecker("Strapi Crash Course (with React & GraphQL) #14 - Rich Text Content"));

// Call api 


module.exports = playlistChecker;