//map assigns license to badge text/color
const licenseAbbr = new Map([
    ['Apache License 2.0', 'Apache_2.0-blue'],
    ['GNU General Public License v3.0', 'GPLv3-blue'],
    ['MIT License', 'MIT-yellow'],
    [`BSD 2-Clause "Simplified" License`, 'BSD_2--Clause-orange'],
    [`BSD 3-Clause "New" or "Revised" License`, 'BSD_3--Clause-blue'],
    ['Boost Software License 1.0', 'Boost_1.0-lightblue'],
    ['Creative Commons Zero v1.0 Universal', 'CC0_1.0-lightgrey'],
    ['Eclipse Public License 2.0', 'EPL_2.0-red'],
    ['GNU Affero General Public License v3.0', 'AGPL_v3-blue'],
    ['GNU General Public License v2.0', 'GPL_v2-blue'],
    ['GNU Lesser General Public License v2.1', 'LGPL_v2.1-blue'],
    ['Mozilla Public License 2.0', 'MPL_2.0-brightgreen'],
    ['The Unlicense', 'Unlicense-blue']
]);

//map assigns license to official link
const licenseLinks = new Map([
    ['Apache License 2.0', `https://opensource.org/licenses/Apache-2.0`],
    ['GNU General Public License v3.0', `https://www.gnu.org/licenses/gpl-3.0`],
    ['MIT License', `https://opensource.org/licenses/MIT`],
    [`BSD 2-Clause "Simplified" License`, `https://opensource.org/licenses/BSD-2-Clause`],
    [`BSD 3-Clause "New" or "Revised" License`, `https://opensource.org/licenses/BSD-3-Clause`],
    ['Boost Software License 1.0', `https://www.boost.org/LICENSE_1_0.txt`],
    ['Creative Commons Zero v1.0 Universal', `http://creativecommons.org/publicdomain/zero/1.0/`],
    ['Eclipse Public License 2.0', `https://opensource.org/licenses/EPL-1.0`],
    ['GNU Affero General Public License v3.0', `https://www.gnu.org/licenses/agpl-3.0`],
    ['GNU General Public License v2.0', `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`],
    ['GNU Lesser General Public License v2.1', `https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html`],
    ['Mozilla Public License 2.0', `https://opensource.org/licenses/MPL-2.0`],
    ['The Unlicense', `http://unlicense.org/`]
]);

//get license badge from abbreviations map
const renderLicenseBadge = (license) => {
    let abbrVal = licenseAbbr.get(license); //matches user input to map key and assigns its value
    return abbrVal ? `![License](https://img.shields.io/badge/License-${encodeURIComponent(abbrVal)})` : '';
}

//get license link from links map
const renderLicenseLink = (license) => {
    let linkVal = licenseLinks.get(license); //matches user input to map key and assigns its value
    return linkVal ? `[${license}](${linkVal})` : '';
}

//generates license section content
const renderLicenseSection = (license, authorName) => {
    let licenseText = `Copyright © 2019 ${authorName}. 
This project is licensed under the ${license}.
For more information on this license, please visit the 
official page at ${renderLicenseLink(license)}.`;

    return license ? licenseText : 'This project is not licensed';
}

//generates readme content
const generateMarkdown = (input) => {
    return `# ${input.title}\n### by ${input.authorName}\n${renderLicenseBadge(input.license)}\n

## Description\n${input.description}\n

## Table of Contents
#### - [Installation](#installation)
#### - [Usage](#usage)
#### - [Features](#features)
#### - [Contribution](#contribution)
#### - [Tests](#tests)
#### - [Credits](#credits)
#### - [Questions](#questions)
#### - [License](#license)\n

## Installation\n${input.installation}\n

## Usage\n${input.usage}\n

## Features\n${input.features}\n

## Contribution\n${input.contribution}\n

## Tests\n${input.tests}\n

## Credits\n${input.credits}\n

## Questions
Regarding any questions or comments, please reach out to the author:
#### GitHub: [${input.githubUser}](https://github.com/${input.githubUser})
#### Email Address: ${input.email}\n

## License\n${renderLicenseSection(input.license, input.authorName)}\n
`;
}

//exports generateMarkdown function to index.js
module.exports.generateMarkdown = generateMarkdown;