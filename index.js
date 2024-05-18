import inquirer from "inquirer";
let myBalance = 10000000;
let myPin = 3412;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Please enter you pin",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    console.log("Your pin code is correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "What do you want to do?",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    console.log("operationAns");
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        console.log("enter your amount"),
            myBalance -= amountAns.amount;
        console.log("Your new balance is: " + myBalance);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Your pin code is incorrect");
}
;
