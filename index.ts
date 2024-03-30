import inquirer from "inquirer";

let myBalance = 1000;
let myPin = 123;
let pinAnswer = await inquirer.prompt([
    { name: "pin", message: " Enter your pin", type: "number" },
]);
if (pinAnswer.pin === myPin) {
    console.log("verified!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            { name: "amount", message: "please enter amount", type: "number" },
        ]);
        myBalance -= amountAns.amount;
        console.log(" Your remaining balance is :" + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log(" your balance is:" + myBalance);
    }
    else {
        console.log(" incorrect pin try again!");
    }
}