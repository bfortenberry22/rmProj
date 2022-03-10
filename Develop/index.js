// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if(titleInput){
                    return true; 
                } else {
                    console.log ('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: "username",
            message : 'What is your GitHub username? (Required)',
            validate: usernameInput => {
                if(usernameInput){
                    return true; 
                } else {
                    console.log ('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'description', 
            message: 'Write a description of your porject. (Required)',
            validate: descriptionInput => {
                if(descriptionInput){
                    return true; 
                } else {
                    console.log ('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type:  'input',
            name: 'installation',
            message: 'What are the steps required to install your project? (Required)',
            validate: installationInput => {
                if(installationInput){
                    return true; 
                } else {
                    console.log ('Please enter the steps to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage', 
            message: 'Provide instructions and examples for using your project. (Required)',
            validate: usageInput => {
                if(usageInput){
                    return true; 
                } else {
                    console.log ('Please enter instructions and examples for using your project!');
                    return false;
                }
            }
        },
        {
            //change this to boolean later
            type: 'input',
            name: 'credit',
            message: 'Please enter the contribitors.'
        },
    ])
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeReadMe = fileContent => {
    return new Promise ((resolve, reject)=>{
        fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
            if (err){
                reject(err);
                return;
            }
        
            resolve({
                OK: true, 
                message: 'File Created!'
            });
        });
    });
};


// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

questions()
    .then(answers=> {
        return generateMarkdown(answers);
    })
    .then(writeReadMe());


