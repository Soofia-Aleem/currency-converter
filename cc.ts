#! /usr/bin/env node

import inquirer from 'inquirer'

const currency: any = {
    PKR: 1 , //based currency
    EUR: 0.0033,
    GBP: 0.0028,
    INR: 0.30,
    USD: 0.0036,
    IDR: 0.017,
    KWD: 0.001,
    ZND: 0.005,
    LKR: 1.08,
    XOF: 2.17,
    IRR: 151.60,
    COP: 13.90,
    CNY: 0.026,
    AFN: 0.25,
    AMD: 1.39
};

let user_answer= await inquirer.prompt(
    [
        {
            name: "from",
            message:"inter from currency",
            type:"list",
            choices:["PKR","EUR","GBP","INR","USD","IDR","KWD","ZND","LKR","XOF","IRR","COP","CNY","AFN","AMD"]
        },
        {
            name: "to",
            message:"inter to currency",
            type:"list",
            choices:["PKR","EUR","GBP","INR","USD","IDR","KWD","ZND","LKR","XOF","IRR","COP","CNY","AFN","AMD"]
        },
        {
            name: "amount",
            message:"inter your amount",
            type:"number",
        }
    ]
)

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount

let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount
console.log(Math.round(convertedAmount));
