#! /user/bin/env nodenp

import inquirer from "inquirer";

let myBalance = 10000;
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
    if (withdrawAmount <= myBalance) {
      console.log("You have withdrawn : ", withdrawAmount.amountWithdraw);
      myBalance -= withdrawAmount.amountWithdraw;
      console.log("Remaining balance : ", myBalance);
    } else if (operationAns.operation === "Check Balance") {
      console.log("Your balance is : ", myBalance);
    } else {
      console.log("The amount is incorrect ");
    }
  }
} else {
  console.log("Incorrect Pin code");
}
