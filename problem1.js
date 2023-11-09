
// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:

const data = require('./data.js');



const Problem1= (num)=>{
    for(var i =0; i<data.inventory.length; i++){

        if(data.inventory[i].id === num){
            console.log(`Car ${num} is a ${data.inventory[i].car_make} ${data.inventory[i].car_model}`);
        }

    
    }
    


}

module.exports = Problem1;


