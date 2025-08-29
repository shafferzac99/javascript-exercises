const getTheTitles = function(arr) {
    let titles = [];
    
    for(let object of arr){
        titles.push(object.title);
    }

    return titles;


};

// Do not edit below this line
module.exports = getTheTitles;
