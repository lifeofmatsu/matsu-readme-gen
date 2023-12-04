// const licenseOpts = [
//     'Apache License 2.0',
//     'GNU General Public License v3.0',
//     'MIT License',
//     'BSD 2-Clause \"Simplified\" License',
//     'BSD 3-Clause \"New\" or \"Revised\" License',
//     'Boost Software License 1.0',
//     'Creative Commons Zero v1.0 Universal',
//     'Eclipse Public License 2.0',
//     'GNU Affero General Public License v3.0',
//     'GNU General Public License v2.0',
//     'GNU Lesser General Public License v2.1',
//     'Mozilla Public License 2.0',
//     'The Unlicense'
// ];

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

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
    let abbrVal = licenseAbbr.get(license);
    return abbrVal ? `![License](https://img.shields.io/badge/License-${encodeURIComponent(abbrVal)})` : '';

    // switch (license) {
    //     case licenseOpts[0]: //Apache 2.0
    //         `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    //         break;
    //     case licenseOpts[1]: //GPLv3
    //         `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    //         break;
    //     case licenseOpts[2]: //MIT
    //         `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    //         break;
    //     case licenseOpts[3]: //BSD 2-Clause
    //         `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
    //         break;
    //     case licenseOpts[4]: //BSD 3-Clause
    //         `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
    //         break;
    //     case licenseOpts[5]: //Boost 1.0
    //         `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
    //         break;
    //     case licenseOpts[6]: //CC0 1.0
    //         `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`;
    //         break;
    //     case licenseOpts[7]: //EPL 1.0
    //         `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
    //         break;
    //     case licenseOpts[8]: //AGPL v3
    //         `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
    //         break;
    //     case licenseOpts[9]: //GPL v2
    //         `![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
    //         break;
    //     case licenseOpts[10]: //LGPL v3
    //         `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
    //         break;
    //     case licenseOpts[11]: //MPL 2.0
    //         `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    //         break;
    //     case licenseOpts[12]: //Unlicense
    //         `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
    //         break;
    //     default: return '';
    // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
    let linkVal = licenseLinks.get(license);
    return linkVal ? `![License link](${linkVal})` : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
    let licenseText = `## License\nCopyright © 2019 ${github_user}. 
    This project is licensed under the ${license} license.
    For more information on the ${license}, please visit their 
    official page at ${renderLicenseLink(license)}.`;

    return license ? licenseText : '';
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}\n

    ## Description
    ${data.description}\n

    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contribution](#contribution)
    5. [Tests](#tests)
    6. [Questions](#questions)\n

    ## Installation
    ${data.installation}\n

    ## Usage
    ${data.usage}\n

    ## License
    ${renderLicenseSection(data.license)}\n

    ## Contribution
    ${data.contribution}\n

    ## Tests
    ${data.tests}\n

    ## Questions
    Regarding any questions or comments, please reach out to the author:
    #### GitHub: ${data.github_user} (https://github.com/${data.github_user})
    #### Email Address: ${data.email}
    `;
}

//module.exports = generateMarkdown;
export default generateMarkdown;