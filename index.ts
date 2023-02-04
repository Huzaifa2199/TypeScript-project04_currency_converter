#!/usr/bin/env node
import inquirer from "inquirer";

let conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1        
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1        
    },
}

const answers:{
    from: "PKR" | "GBP" | "USD",
    to: "PKR" | "GBP" | "USD",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Select conversion currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount"
    },
])

const {from, to, amount} = answers;

if(from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`)
} else{
    console.log("Invalid Input")
}