// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const userPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Project Title:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests:'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for your project:',
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
            name: 'github_user',
            message: 'GitHub Username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email Address:'
        }
    ]);
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('README.md file created successfully')
    );
}

// TODO: Create a function to initialize app
const main = () => {
    userPrompt()
    .then((answers) => writeFile('README.md', answers))
    .then(() => console.log('Input was written to README.md successfully'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
main();