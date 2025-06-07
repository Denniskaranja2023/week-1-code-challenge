function calculateBodaFare(inputDistance){  //Function declaration

const distanceInKm= Number.parseFloat(inputDistance)     // transforms promp input into an integer
    if (isNaN(distanceInKm)) {
        console.log("Input a valid number e.g 20")    //rejects any non-number value
        return;
    }
    else if(distanceInKm<0){
        console.log("input a positive value")       //rejects any number under 0km)
        return;
    }
  const baseFare= 50                                       //declares the relevant variables
  const travelCharge= distanceInKm*15
  const totalFare= baseFare + travelCharge
  console.log( `Your distance is: ${distanceInKm} km`)       //logs the results on the console
  console.log(`The basic charge is: KES${baseFare}`)
  console.log(`The travel charge is: KES${travelCharge}`)
  console.log(`Your total charge is: ${totalFare}`)
  console.log(` \n Enjoy your ride!`)

}
const userInput= prompt("How far shall I take you today?", "10")       //prompts user to input a value
calculateBodaFare(userInput);                                         //calls the calculator function, passing userinput as an argument