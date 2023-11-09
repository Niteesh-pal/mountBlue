const data = require('./data');

var arr = [];

const program4= ()=>{
    for(var i = 0 ; i<data.inventory.length; i++){

        arr.push(data.inventory[i].car_year);
    }

    return arr;
}

module.exports = program4;