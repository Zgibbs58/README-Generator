const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

const prompt = inquirer.createPromptModule();

function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, generateMarkdown(data));
  } catch (error) {
    console.log(error);
  }
}

function init() {
  prompt(questions).then((response) => {
    writeToFile("newReadme.md", response);
  });
}

init();
