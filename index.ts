#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import rainbow from "chalk-rainbow";

let myBalance = 10000;


let atm = await inquirer.prompt(
    [
        {
            name: "userName",
            type: "string",
            message: chalk.bold.green("Enter your name: ")
        },
        {
            name: "userPin",
            type: "number",
            message: chalk.bold.green("Enter your pinCode: ")
        }
    ]
    
    )
    if(atm.userName === "huzaifa" && atm.userPin === 3108){
        console.log("Correct userName and pin");
        console.log(chalk.gray("\n------------------------------------------------------\n"));
        
        console.log(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));

        console.log(chalk.gray("\n------------------------------------------------------\n"));

        let action = await inquirer.prompt([
            {
                name: "operators",
                message: chalk.bold.green("Choose operator for action: "),
                type: "list",
                choices: ["WithDraw","Check Balance","Transfer amount","Add Money"]
            }
        ])

        console.log(chalk.gray("\n------------------------------------------------------\n"));
// _______________________________________________________________________________________________________________________________________________

// Compeleted


        if(action.operators === "WithDraw"){
            
            let withDrawAmount = await inquirer.prompt([
            {
                name: "withdraw",
                message: chalk.bold.green("Choose one of these amounts"),
                type: "list",
                choices: [2000,4000,6000,8000,10000]
            }
        ])
        console.log(chalk.gray("\n------------------------------------------------------\n"));
    
        if(withDrawAmount.withdraw <= myBalance){
            myBalance -= withDrawAmount.withdraw
            console.log("Amount with Drawn " + withDrawAmount.withdraw);
            console.log(chalk.gray("\n------------------------------------------------------\n"));
            console.log(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
        }

    }
    
// _______________________________________________________________________________________________________________________________________________

// Balance checking

            else if(action.operators === "Check Balance"){
            console.log(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
            
        }
        
// _______________________________________________________________________________________________________________________________________________


// Compeleted
        
        else if(action.operators === "Transfer amount"){

            let TransferAmount = await inquirer.prompt([
                {
                    name: "amount",
                    message: chalk.bold.green("Choose one of these amounts"),
                    type: "list",
                    choices: [2000,4000,6000,8000,10000]
                }
            ])
            if(TransferAmount.amount <= myBalance){
                myBalance -= TransferAmount.amount
                console.log(chalk.gray("\n------------------------------------------------------\n"));
                let TransferNumber = await inquirer.prompt([{
                    name: "mobileNumber",
                    message: chalk.bold.green("Enter Recievier account number: "),
                    type: "string"
                }])
                console.log(chalk.gray("\n------------------------------------------------------\n"));
                    console.log(`${TransferAmount.amount} transfered succesfully to: ` + TransferNumber.mobileNumber);
                    console.log(chalk.gray("\n------------------------------------------------------\n"));
                    console.log(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
                }
                






// _______________________________________________________________________________________________________________________________________________




            
        }else if(action.operators === "Add Money"){
            let addMoney = await inquirer.prompt([
                {
                    name: "moneyAdd",
                    message: chalk.bold.green("Choose one of these amounts"),
                    type: "list",
                    choices: [2000,4000,6000,8000,10000]
                }
            ])
            
            if(addMoney.moneyAdd <= myBalance){
            myBalance += addMoney.moneyAdd
            console.log(`${addMoney.moneyAdd} is succesfully transfered to your account`);
            console.log(chalk.gray("\n------------------------------------------------------\n"));
            console.log(chalk.bold(rainbow("Your current account Balance is: ") + myBalance + '\n'));
        }
        }
        






















// _______________________________________________________________________________________________________________________________________________
        
        else{
            console.log("Please Select a valid operator")
        }
        

// ________________________________________________________________________




    }else{
        console.log("Incorrect userName or pin");
    }