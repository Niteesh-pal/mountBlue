let data = require('./data')
data = data.inventory;
 var arr = [];
const problem3=()=>{

    for(var i = 0; i<data.length; i++){
        arr.push(data[i].car_make);
    }

    arr.sort();
    return arr;
}

module.exports = problem3;