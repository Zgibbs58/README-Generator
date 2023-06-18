// Created an object to store the license links and badge colors.
// This is the link I used to find badge info: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba.
const lincenseLinks = {
  MIT: ["MIT-yellow.svg", "https://opensource.org/licenses/MIT"],
  ISC: ["ISC-blue.svg", "https://opensource.org/licenses/ISC"],
  Mozilla: ["MPL_2.0-brightgreen.svg", "https://opensource.org/licenses/MPL-2.0"],
  Apache: ["Apache_2.0-blue.svg", "https://opensource.org/licenses/Apache-2.0"],
  EPL: ["EPL_1.0-red.svg", "https://opensource.org/licenses/EPL-1.0"],
  WTFPL: ["WTFPL-brightgreen.svg", "http://www.wtfpl.net/about/"],
};

function renderLicenseBadge(license) {
  // licenseLinks[license][0] accesses the key that matches the license variable data and the first element of the array
  return license !== "none" ? `[![License](https://img.shields.io/badge/License-${lincenseLinks[license][0]})](${lincenseLinks[license][1]})` : "";
}

function renderLicenseLink(license) {
  return license !== "none" ? `[${license}](https://opensource.org/licenses/${lincenseLinks[license][1]})` : "";
}

function renderLicenseSection(license) {
  return license !== "none"
    ? `## License

This application is covered under the ${renderLicenseLink(license)} license.`
    : "";
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Tests
${data.test}

## Questions

${data.prefCom}.

Github Account: [${data.gitName}](https://github.com/${data.gitName})
  
Email Address: [${data.email}](mailto:${data.email})
  
`;
}

module.exports = generateMarkdown;
