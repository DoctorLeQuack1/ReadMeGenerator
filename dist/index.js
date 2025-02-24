"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const generateMarkdown_1 = __importDefault(require("./utils/generateMarkdown"));
const fs_1 = __importDefault(require("fs"));
const questions = [
    {
        type: 'input',
        name: 'project_name',
        message: 'What is the name of your project?',
        validate: (answer) => answer.trim().length > 0 || 'Please enter a valid name',
    },
    {
        type: 'input',
        name: 'project_description',
        message: 'What is the project motivation?',
        validate: (answer) => answer.trim().length > 0 || 'Please enter a valid motivation',
    },
    {
        type: 'input',
        name: 'project_justification',
        message: 'Why did you build this project?',
        validate: (answer) => answer.trim().length > 0 || 'Please enter a valid reason',
    },
    {
        type: 'input',
        name: 'project_solution',
        message: 'What problem does it solve?',
        validate: (answer) => answer.trim().length > 0 || 'Please enter a valid problem',
    },
    {
        type: 'input',
        name: 'project_learnings',
        message: 'What did you learn?',
        validate: (answer) => answer.trim().length > 0 || 'Please enter a valid learning',
    },
    {
        type: 'input',
        name: 'installation_instructions',
        message: 'Enter the installation instructions...',
        validate: (answer) => answer.trim().length > 0 || 'Please enter valid installation instructions',
    },
    {
        type: 'input',
        name: 'usage_information',
        message: 'Enter the project usage information...',
        validate: (answer) => answer.trim().length > 0 || 'Please enter valid usage information',
    },
    {
        type: 'input',
        name: 'contribution_guidelines',
        message: 'Enter the project contribution information...',
        validate: (answer) => answer.trim().length > 0 || 'Please enter valid contribution guidelines',
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: 'Enter the project test instructions...',
        validate: (answer) => answer.trim().length > 0 || 'Please enter valid test instructions',
    },
    {
        type: 'list',
        name: 'license_election',
        message: 'Please select your license',
        choices: ['MIT', 'Apache 2.0', 'ISC', 'GNU GPLv2', 'No License'],
        loop: false,
    },
    {
        type: 'input',
        name: 'github_profile',
        message: 'Enter your GitHub username...',
    },
    {
        type: 'input',
        name: 'contact_email',
        message: 'Enter your contact email...',
        validate: (answer) => answer.trim().length > 0 && answer.includes('@') || 'Please enter a valid email',
    },
];
function writeToFile(fileName, data) {
    fs_1.default.writeFile(fileName, (0, generateMarkdown_1.default)(data), (err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log('README.md successfully created!');
        }
    });
}
async function init() {
    try {
        const ans = await inquirer_1.default.prompt(questions);
        writeToFile('../README.md', ans);
    }
    catch (error) {
        console.error("Error obtained:", error);
    }
}
init();
