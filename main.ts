#! /user/bin/env nodenp

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 44661;
console.log("Your Balance is : ", myBalance);

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code");
  
  let withdrawMethod= await inquirer.prompt(
    [
        {
            message:"Please select any one of the following",
            name:"withdrawOption",
            type:"list",
            choices:["Current","Savings"]
        }
    ]
)
if(withdrawMethod.withdrawOption==="Current"){
    
    let operationAns = await inquirer.prompt([
        {
          name: "operation",
          message: "Please select option",
          type: "list",
          choices: ["Withdraw", "Check Balance"],
        },
      ]);
      if (operationAns.operation === "Withdraw") {
        let withdrawAmount = await inquirer.prompt([
          {
            name: "amountWithdraw",
            message: "Enter the amount you want to withdraw",
            type: "number",
          },
        ]);
        if (withdrawAmount.amountWithdraw <= myBalance) {
          console.log("You have withdrawn : ", withdrawAmount.amountWithdraw);
          myBalance -= withdrawAmount.amountWithdraw;
          console.log("Remaining balance : ", myBalance);
        } else if (operationAns.operation === "Check Balance") {
          console.log("Your balance is : ", myBalance);
        } else {
          console.log("Insufficient Balance ");
        }
      }
}
else if(withdrawMethod.withdrawOption==="Savings"){
    console.log("You Can only withdraw 10000 in one day at a time in savings");
    let savingWithdraw= await inquirer.prompt(
        {
            message:"Enter the amount you want to withdraw :",
            type:"number",
            name:"savingMoney"
        }
    )
    if(savingWithdraw.savingMoney<=10000){
        console.log("You have withdrawn ",savingWithdraw.savingMoney);
        myBalance-=savingWithdraw.savingMoney;
        console.log("Your remaining balance is :",myBalance);
        
        
        
    }
    else{
        console.log("You cannot withdraw more than 10000 in savings account");
        
    }
    
}
console.log("THNAK YOU FOR USING OUR BANK SERVICE");

} 