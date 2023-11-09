const data = require('./data');

let arr = [];
const problem5 =(array)=>{

    for(var i = 0 ; i<array.length; i++){
        if(data.inventory[i].car_year < 2000){
            
            arr.push(data.inventory[i].car_year);
            
        }
    }

    return arr;
}

module.exports = problem5;