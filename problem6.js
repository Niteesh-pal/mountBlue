const data = require('./data');
// const array = data.inventory;


let arr =[];
const problem6=()=>{
    for( var i = 0 ; i<data.inventory.length; i++){
        if(data.inventory[i].car_make === 'BMW' || data.inventory[i].car_make === 'Audi'){
            
           arr.push(data.inventory[i]);
        }
    }

    return arr;
} 

module.exports = problem6;