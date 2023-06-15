// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

const prompt = inquirer.createPromptModule();

// TODO: Create an array of questions for user input
prompt(questions).then((response) => {
  writeToFile("newReadme.md", response);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, generateMarkdown(data));
  } catch (error) {
    console.log(err);
  }
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
