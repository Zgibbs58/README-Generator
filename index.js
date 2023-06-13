// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

// TODO: Create an array of questions for user input
prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "checkbox",
    message: "What sections do you wish to include in your README?",
    name: "sections",
    choices: ["Description", "Installation Instructions", "Usage Information", "Contribution Guidelines", "Test Instructions"],
  },
  {
    type: "input",
    message: "Enter the Descrition content: ",
    name: "description",
    when: (answers) => answers.sections.includes("Description"),
  },
  {
    type: "input",
    message: "Enter the Installation Instructions content: ",
    name: "installation",
    when: (answers) => answers.sections.includes("Installation Instructions"),
  },
  {
    type: "input",
    message: "Enter the Usage Information content: ",
    name: "usage",
    when: (answers) => answers.sections.includes("Usage Information"),
  },
  {
    type: "input",
    message: "Enter the Usage Contribution Guidelines content: ",
    name: "contribution",
    when: (answers) => answers.sections.includes("Contribution Guidelines"),
  },
  {
    type: "input",
    message: "Enter the Usage Test Instructions content: ",
    name: "test",
    when: (answers) => answers.sections.includes("Test Instructions"),
  },
  {
    type: "list",
    message: "What is your preferred method of communication?",
    name: "preferred",
    choices: ["MIT", "Educational Community License v2.0", "ISC", "Artistic License"],
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
