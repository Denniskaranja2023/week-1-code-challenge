
function estimateTransactionFee(inputAmount) {  //Estimator function declaration

  amountToSend= Number.parseFloat(inputAmount)  //transforms user input to a decimal number data type

  if (isNaN(amountToSend) || amountToSend===0 ) {  //rejects any value that is zero or a data type apart from  number
    console.log('Invalid input')
    return;
  }

    const transactionFee= Math.round(amountToSend * 0.015)               //declares relevant variables
    const debitAmount = (transactionFee + amountToSend)
    const leastAmount= (amountToSend +10)
    const highestAmount= (amountToSend +70)

    if (transactionFee <= 10) {                               //First if function applies for transaction fees below KES 10, each is assigned a fee of KES10 and nothing less
        console.log(`To send: KES ${amountToSend}`)
        console.log(`Total transaction fee is KES 10`)
        console.log(`Total amount to send is KES ${leastAmount}`)
    }

     else if (transactionFee >=70) {                           //Second if function applies for transaction fees above KES 70, each is assigned a fee of KES70 and nothing more
        console.log(`To send: KES ${amountToSend}`)
        console.log(`Total transaction fee is KES 70`)
        console.log(`Total amount to send is KES ${highestAmount}`)
    }
    else{
        console.log(`To send: KES ${amountToSend}`)                  //Any other transaction fee that does not match function 1 and 2 is executed this way
        console.log(`Total transaction fee is KES ${transactionFee}`)
        console.log(`Total amount to send is KES ${debitAmount}`)
    }
}
const userInput = prompt("How much do you want to send?", "200") //prompts user of Mobile Money platform to enter amount to be sent

estimateTransactionFee(userInput); //passes the user's input in the prompt as an argument to the estimator function ready for execution


