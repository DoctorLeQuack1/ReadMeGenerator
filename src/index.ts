import inquirer from 'inquirer';
import generateMarkdown from "./utils/generateMarkdown";
import fs from "fs";
import figlet from "figlet";
import colors from "colors";

// Declare all of our questions for the inquirer prompt
const questions = [
    {
        type: 'input',
        name: 'project_name',
        message: 'What is the name of your project?:',
        validate: (answer: string) => answer.trim().length > 0 || 'Please enter a valid name',
    },
    {
        type: 'input',
        name: 'project_description',
        message: 'What is the project motivation? (add "<br>" for a line break):',
        validate: (answer: string) => answer.trim().length > 0 || 'Please enter a valid motivation',
    },
    {
        type: 'input',
        name: 'project_justification',
        message: 'Why did you build this project? (add "<br>" for a line break):',
        validate: (answer: string) => answer.trim().length > 0 || 'Please enter a valid reason',
    },
    {
        type: 'input',
        name: 'project_solution',
        message: 'What problem does it solve? (add "<br>" for a line break):',
        validate: (answer: string) => answer.trim().length > 0 || 'Please enter a valid problem',
    },
    {
        type: 'input',
        name: 'project_learnings',
        message: 'What did you learn? (add "<br>" for a line break):',
        validate: (answer: string) => answer.trim().length > 0 || 'Please enter a valid learning',
    },
    {
        type: 'input',
        name: 'installation_instructions',
        message: 'Enter the installation instructions... (add "<br>" for a line break):',
        validate: (answer: string) => answer.trim().length > 0 || 'Please enter valid installation instructions',
    },
    {
        type: 'input',
        name: 'usage_information',
        message: 'Enter the project usage information... (add "<br>" for a line break):',
        validate: (answer: string) => answer.trim().length > 0 || 'Please enter valid usage information',
    },
    {
        type: 'input',
        name: 'contribution_guidelines',
        message: 'Enter the project contribution information... (add "<br>" for a line break):',
        validate: (answer: string) => answer.trim().length > 0 || 'Please enter valid contribution guidelines',
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: 'Enter the project test instructions... (add "<br>" for a line break):',
        validate: (answer: string) => answer.trim().length > 0 || 'Please enter valid test instructions',
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
        validate: (answer: string) => answer.trim().length > 0 || 'Please enter valid GitHub username',
    },
    {
        type: 'input',
        name: 'contact_email',
        message: 'Enter your contact email...',
        validate: (answer: string) => answer.trim().length > 0 && answer.includes('@') || 'Please enter a valid email',
    },
];

// Write file function
function writeToFile(fileName: string, data : any): void {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md successfully created!');
        }
    });
}

// Init is an async function that will fetch all of our answers
async function init(): Promise<void> {
    try {
        const ans: any = await inquirer.prompt(questions);
        writeToFile('./README.md', ans);
    } catch (error) {
        console.error("Error obtained:", error);
    }
}


// Figlet will prompt our welcome message
figlet("Welcome to READMEGenerator App", (err: any, data: any) => {
    if (err) {
        console.log("Something went wrong...".red);
        console.dir(err);
        return;
    }
    console.log(colors.rainbow(data)); // Aplica el color correctamente
    init().catch(console.error);
});

