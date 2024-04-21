#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to find the word count: "
    }
]);
//trim will cut white spaces n lines starting n end ki not from between the words. 
// . means is chees k andr ye kam kro
// split array bnata h, " " is space ka kam segregation of words h
const words = answers.Sentence.trim().split(" "); //trims n split = method
//print array of words to console
console.log(words);
//print word count of sentence
console.log(`Your sentence word count is ${words.length}`);
