
function chaiRecipe (cupNUmber) {   //declare a function that accepts 1 argument
   
    let numberOfCups= Number.parseInt(cupNUmber,10)  //transform any string element into a decinal integer
    
    const water= 200                                //declare the standard water quantity (ml) required for a cup of tea then multiply it with the number of cups user wants to make
    let waterQuantity= numberOfCups * water;
    const milk= 50                                  //declare the standard milk quantity (ml) required for a cup of tea then multiply it with the number of cups user wants to make
    let milkQuantity= numberOfCups*milk;          
    const teaLeaves = 1                              //declare the standard number of teaspoons of tealeaves required for a cup of tea then multiply it with the number of cups user wants to make
    let teaLeavesSpoons= numberOfCups*teaLeaves;
    const sugar = 2                                  //declare the standard sugar quantity(teaspoons) required for a cup of tea then multiply it with the number of cups user wants to make
    let sugarSpoons= numberOfCups*sugar;

        console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);    //log each ingredient onto the console
        console.log(`Water:${waterQuantity} ml`);
        console.log(`Milk:${milkQuantity} ml`);
        console.log(`Tea Leaves(Majani):${teaLeavesSpoons} tablespoon`);
        console.log(`Sugar(Sukari):${sugarSpoons} teaspoons`);
        
        console.log(`\nEnjoy your Kenyan Chai!`)
    };
const inputCups = prompt('Hello! Karibu sana! How many cups of Kenyan tea are we making today?', '3'); //prompt user to input number of cups to be made
chaiRecipe(inputCups);  //pass the input of the user into chaiRecipe function as an argument