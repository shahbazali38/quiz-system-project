#!/usr/bin/env node


// Quiz Sysytem project
// The app will show the students multiple choice questions and prompt the user to reply.
// in the end it will show the students result of the quiz
import inquirer from "inquirer"
console.log("welcome to my adventure quiz game:")
console.log("you are required to gain maximum 4 points for the window.")

let points = 0

// question 1

let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset off?",
        type: "list",
        choices: ["Python", "C++", "Java", "Javascript"]
        
    }
])

if (question1.one == "Javascript") {
    console.log("Your answer is correct.")
    points++
} else {
    console.log("Incorrect answer")
}


// question 2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who is the founder of microsoft?",
        type: "list",
        choices: ["elon Musk", "bill gates", "mark", "Amjad"]
        
    }
])

if (question2.two == "bill gates") {
    console.log("Your answer is correct.")
    points++
} else {
    console.log("Incorrect answer")
}

// question 3

let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "Capital of Pakistan?",
        type: "list",
        choices: ["Islamabad", "Karachi", "Lahore", "Badin"]
        
    }
])

if (question3.three == "Islamabad") {
    console.log("Your answer is correct.")
    points++
} else {
    console.log("Incorrect answer")
}

//question 4

let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "who is the current governor of Sindh?",
        type: "list",
        choices: ["Kamran Tassori", "Shahbaz Sharif", "Imran Khan", "Amjad"]
        
    }
])

if (question4.four == "Kamran Tassori") {
    console.log("Your answer is correct.")
    points++
} else {
    console.log("Incorrect answer")
}



// question 5


let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "Which language you are learning in Governor House?",
        type: "list",
        choices: ["Typescript", "Python", "Java", "javascript"]
        
    }
])

if (question5.five == "Typescript") {
    console.log("Your answer is correct.")
    points++
} else {
    console.log("Incorrect answer")
}

// output conditions

if (points >= 4) {
    console.log("Congratulations!")
    console.log(`your points: ${points}`)
} else {
    console.log("You loss! Try next time")
    console.log(`your points: ${points}`)
}