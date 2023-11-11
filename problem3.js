let data = require('./data')
data = data.inventory;
 var arr = [];
const problem3=()=>{

    for(var i = 0; i<data.length; i++){
        let ele = data[i].car_model;
        console.log(ele);
        arr.push((ele));
    }

    arr.sort();
    return arr;
}

module.exports = problem3;