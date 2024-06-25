#!/usr/bin/env node

import inquirer from "inquirer"

let user_ans = await inquirer.prompt({
    
    
        type: "input",
        name:"words",
        message: "Enter your sentence to find the word count: "
     
})

let word_count = user_ans.words.trim().split(" ").length //trims n split = method

console.log(`Your sentence has ${word_count}`);

//.length= returns the number of elements in an array,  determine the size of these data structures. words ko count krwayga
//trim will cut white spaces from line starting & end (removes whitespace from both ends of a string).....not from between the words. 
// . means is chees k andr ye kam kro
// split = array bnata h, " " is space ka kam segregation of words h