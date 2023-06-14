// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const prompt = inquirer.createPromptModule();

// TODO: Create an array of questions for user input
prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    default: "title",
  },
  //   {
  //     type: "checkbox",
  //     message: "What sections do you wish to include in your README?",
  //     name: "sections",
  //     choices: ["Description", "Installation", "Usage", "Contribution", "Tests"],
  //   },
  {
    type: "input",
    message: "Enter the Descrition content: ",
    name: "description",
    default: "description",
    // when: (answers) => answers.sections.includes("Description"),
  },
  {
    type: "input",
    message: "Enter the Installation Instructions content: ",
    name: "installation",
    default: "instal",
    // when: (answers) => answers.sections.includes("Installation Instructions"),
  },
  {
    type: "input",
    message: "Enter the Usage Information content: ",
    name: "usage",
    default: "usage",
    // when: (answers) => answers.sections.includes("Usage Information"),
  },
  {
    type: "input",
    message: "Enter the Contribution Guidelines content: ",
    name: "contribution",
    default: "contribute",
    // when: (answers) => answers.sections.includes("Contribution Guidelines"),
  },
  {
    type: "input",
    message: "Enter the Test Instructions content: ",
    name: "test",
    default: "inst",
    // when: (answers) => answers.sections.includes("Test Instructions"),
  },
  {
    type: "list",
    message: "What is your preferred method of communication?",
    name: "license",
    choices: [
      { name: "MIT", value: "MIT-yellow.svg" },
      { name: "ISC", value: "ISC-blue.svg" },
      { name: "Mozilla", value: "MPL_2.0-brightgreen.svg" },
      { name: "Apache", value: "Apache_2.0-blue.svg" },
      { name: "EPL", value: "EPL_1.0-red.svg" },
    ],
  },
]).then((response) => {
  writeToFile("newReadme.md", response);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.error(err) : console.log("You're README has been generated to newReadme.md");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
