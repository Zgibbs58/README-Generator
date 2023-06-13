// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license ? `![License: ${license.split("-", 1)}](https://img.shields.io/badge/License-${license})` : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const splitLicense = license.split("-")[0];
  console.log(splitLicense);
  return license
    ? `[https://opensource.org/licenses/${splitLicense.replace("_", "-")}](https://opensource.org/licenses/${splitLicense.replace("_", "-")})`
    : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license
    ? `## License

  ${license.split("-", 1)}
  ${renderLicenseLink(license)}`
    : "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## Contribution
  
  ${data.contribution}

  ## Tests
  
  ${data.test}

  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;
