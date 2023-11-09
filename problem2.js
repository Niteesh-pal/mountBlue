const data = require('./data.js');

const program2= ()=>{

    let len = data.inventory.length;

    console.log(`Last car is ${data.inventory[len-1].car_make} ${data.inventory[len-1].car_model}`)
}

module.exports = program2;