
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  let yourLicense = "";
  if(license === "Apache License 2.0") {
    yourLicense = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  } else if (license === "GNU General Public License v3.0") {
    yourLicense = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  } else if (license === "MIT License")  {
    yourLicense = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (license === "BSD 2-Clause 'Simplified' License") {
    yourLicense = "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)"
  } else if(license === "BSD 3-Clause 'New' or 'Revised' License") {
    yourLicense = "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)"
  } else if(license === "Boost Software License 1.0"){
    yourLicense = "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
  } else if(license === "Creative Commons Zero v1.0 Universal"){
    yourLicense = "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)"
  } else if(license ===  "Eclipse Public License 2.0"){
    yourLicense = "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
  } else if(license === "GNU Affero General Public License v3.0"){
    yourLicense = "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)"
  } else if(license === "GNU General Public License v2.0"){
    yourLicense = "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)"
  } else if(license === "GNU Lesser General Public License v2.1"){
    yourLicense = "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)"
  } else if(license === "Mozilla Public License 2.0"){
    yourLicense = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  } else if(license === "The Unlicense"){
    yourLicense = "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)"
  } else {
    yourLicense = "";
  }
  return yourLicense;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  let licenseLink = "";
  if(license === "Apache License 2.0") {
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GNU General Public License v3.0") {
    licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "MIT License")  {
    licenseLink = "(https://opensource.org/licenses/MIT)"
  } else if (license === "BSD 2-Clause 'Simplified' License") {
    licenseLink = "(https://opensource.org/licenses/BSD-2-Clause)"
  } else if(license === "BSD 3-Clause 'New' or 'Revised' License") {
    licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)"
  } else if(license === "Boost Software License 1.0"){
    licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)"
  } else if(license === "Creative Commons Zero v1.0 Universal"){
    licenseLink = "(http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if(license ===  "Eclipse Public License 2.0"){
   licenseLink = "(https://opensource.org/licenses/EPL-1.0)"
  } else if(license === "GNU Affero General Public License v3.0"){
    licenseLink = "(https://www.gnu.org/licenses/agpl-3.0)"
  } else if(license === "GNU General Public License v2.0"){
    licenseLink = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  } else if(license === "GNU Lesser General Public License v2.1"){
   licenseLink = "(https://www.gnu.org/licenses/lgpl-3.0)"
  } else if(license === "Mozilla Public License 2.0"){
    licenseLink = "(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  } else if(license === "The Unlicense"){
   licenseLink = "(http://unlicense.org/)"
  } else {
    licenseLink = "";
  }
  return licenseLink;
}


// TODO: Create a function to generate markdown for README


function generateMarkdown({title, motivation, problemSolved, infoLearned, installationProcess, usage, collaborators, collaboratorsInfo, license, emailAddress, githubAcct}) {
  
  const markdown = `
# Title:
    ${title}

## Description:
    ${motivation}
    ${problemSolved}
    ${infoLearned}

## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
    ${installationProcess}

## Usage
    ${usage}

## Credits
    ${collaborators}
    ${collaboratorsInfo}

## License
    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    

## Tests

## Questions
  Link to my GitHub profile:
  https://github.com/${githubAcct}

  If you have any additional questions, feel free to reach out to me through email. 
  Email: ${emailAddress}
  
  `
  return markdown;
 }

module.exports = generateMarkdown;
