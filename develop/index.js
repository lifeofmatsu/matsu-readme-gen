
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

const { generateMarkdown } = require('./utils/generateMarkdown');

const userPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter your project title:'
        },
        {
            type: 'input',
            name: 'authorName',
            message: `Enter the author's name:`
        },
        {
            type: 'input',
            name: 'description',
            message: 'Compose a project description:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Outline installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Outline usage guidelines:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Outline contribution guidelines:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'List any tests written for the application:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for the project:',
            choices: [
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause \"Simplified\" License',
                'BSD 3-Clause \"New\" or \"Revised\" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v2.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ]
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter best email address:'
        }
    ]);
}

const main = () => {
    userPrompt()
    .then((input) => writeFile('README.md', generateMarkdown(input)))
    .then(() => console.log('Input written to README.md successfully'))
    .catch((err) => console.error(err));
}

main();