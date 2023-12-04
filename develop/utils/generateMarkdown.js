
const licenseAbbr = new Map([
    ['Apache License 2.0', 'Apache_2.0-blue'],
    ['GNU General Public License v3.0', 'GPLv3-blue'],
    ['MIT License', 'MIT-yellow'],
    ['BSD 2-Clause \"Simplified\" License', 'BSD_2--Clause-orange'],
    ['BSD 3-Clause \"New\" or \"Revised\" License', 'BSD_3--Clause-blue'],
    ['Boost Software License 1.0', 'Boost_1.0-lightblue'],
    ['Creative Commons Zero v1.0 Universal', 'CC0_1.0-lightgrey'],
    ['Eclipse Public License 2.0', 'EPL_2.0-red'],
    ['GNU Affero General Public License v3.0', 'AGPL_v3-blue'],
    ['GNU General Public License v2.0', 'GPL_v2-blue'],
    ['GNU Lesser General Public License v2.1', 'LGPL_v2.1-blue'],
    ['Mozilla Public License 2.0', 'MPL_2.0-brightgreen'],
    ['The Unlicense', 'Unlicense-blue']
]);

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

const renderLicenseBadge = (license) => {
    let abbrVal = licenseAbbr.get(license);
    return abbrVal ? `![License](https://img.shields.io/badge/License-${encodeURIComponent(abbrVal)})` : '';
}

const renderLicenseLink = (license) => {
    let linkVal = licenseLinks.get(license);
    return linkVal ? `[${license}](${linkVal})` : '';
}

const renderLicenseSection = (license, authorName) => {
    let licenseText = `Copyright © 2019 ${authorName}. 
This project is licensed under the ${license}.
For more information on this license, please visit the 
official page at ${renderLicenseLink(license)}.`;

    return license ? licenseText : 'This project is not licensed';
}

const generateMarkdown = (input) => {
    return `# ${input.title}\n### by ${input.authorName}\n${renderLicenseBadge(input.license)}\n

## Description\n${input.description}\n

## Table of Contents
#### [1. Installation](#installation)
#### [2. Usage](#usage)
#### [3. Contribution](#contribution)
#### [4. Tests](#tests)
#### [5. License](#license)
#### [6. Questions](#questions)\n

## Installation\n${input.installation}\n

## Usage\n${input.usage}\n

## Contribution\n${input.contribution}\n

## Tests\n${input.tests}\n

## License\n${renderLicenseSection(input.license, input.authorName)}\n

## Questions
Regarding any questions or comments, please reach out to the author:
#### GitHub: ${input.githubUser} (https://github.com/${input.githubUser})
#### Email Address: ${input.email}
`;
}

module.exports.generateMarkdown = generateMarkdown;