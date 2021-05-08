// TODO: Include packages needed for this application

const inquirer=require("inquirer");
const fs=require("fs");
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type:"input",
        name:"yourName",
        message:"Enter your name."
    },
    {
        type:"input",
        name:"githubu",
        message:"Enter your github username."
    },
    {
        type:"input",
        name:"email",
        message:"Enter your email adress."
    },
    {
        type:"input",
        name:"projectRepo",
        message:"Enter the name of your project repository on github."
    },
    {
        type:"input",
        name:"projectTitle",
        message:"Enter the title of your project."
    },
    {
        type:"input",
        name:"projectDescriptionOne",
        message:"What was your motivation for building this project?"
    },
    {
        type:"input",
        name:"projectDescriptionTwo",
        message:"Why did you build this project?"
    },
    {
        type:"input",
        name:"projectDescriptionThree",
        message:"What problem does your project solve?"
    },
    {
        type:"input",
        name:"projectDescriptionFour",
        message:"What did you learn while building this? Name any skills you honed."
    },
    {
        type:"input",
        name:"installationOne",
        message:"What are the steps required to install your project? You will be provided space for 5 steps by default. If you have less than 5, press enter to the remaining installation prompts. Enter Step 1 now."
    },
    {
        type:"input",
        name:"installationTwo",
        message:"What are the steps required to install your project? Enter Step 2 now."
    },
    {
        type:"input",
        name:"installationThree",
        message:"What are the steps required to install your project? Enter Step 3 now."
    },
    {
        type:"input",
        name:"installationFour",
        message:"What are the steps required to install your project? Enter Step 4 now."
    },
    {
        type:"input",
        name:"installationFive",
        message:"What are the steps required to install your project? Enter Step 5 now."
    },
    {
        type:"input",
        name:"usageOne",
        message:"Provide step by step instructions to use your app. You will be given 5 steps by default. If you have less than 5, press enter on the remaining instruction prompts. Enter Step 1 now."
    },
    {
        type:"input",
        name:"usageTwo",
        message:"Provide step by step instructions to use your app. Enter Step 2 now."
    },
    {
        type:"input",
        name:"usageThree",
        message:"Provide step by step instructions to use your app. Enter Step 3 now."
    },
    {
        type:"input",
        name:"usageFour",
        message:"Provide step by step instructions to use your app. Enter Step 4 now."
    },
    {
        type:"input",
        name:"usageFive",
        message:"Provide step by step instructions to use your app. Enter Step 5 now."
    },
    {
        type:"input",
        name:"CreditsTwo",
        message:"Enter the names and github urls of all other contributors. You will be given 4 other contributors by default. If you have less than 4, press enter on the remaining contributors prompts. Enter the name and github portfolio of the second contributor now."
    },
    {
        type:"input",
        name:"CreditsThree",
        message:"Enter the name and github portfolio of the third contributor now."
    },
    {
        type:"input",
        name:"CreditsFour",
        message:"Enter the name and github portfolio of the fourth contributor now."
    },
    {
        type:"input",
        name:"CreditsFive",
        message:"Enter the name and github portfolio of the fifth contributor now..... unless he never participated on the project."
    },
    {
        type:"input",
        name:"miscHelp",
        message:"If you used any third-party assets, list the creators of said assets and a link to their websites here.Press enter without typing if this does not apply"
    },
    {
        type:"input",
        name:"tutorials",
        message:"Link and list any tutorials you used here.",
    },
    {
        type:"checkbox",
        name:"license",
        message:"Select a license.",
        choices: [
            "MIT",
            "Apache",
            "ISC"
        ],
    },
]).then(result=>{

    const {yourName,githubu,email,projectTitle,projectDescriptionOne,projectDescriptionTwo,projectDescriptionThree,projectDescriptionFour,installationOne,installationTwo,installationThree,installationFour,installationFive,usageOne,usageTwo,usageThree,usageFour,usageFive,CreditsTwo,CreditsThree,CreditsFour,CreditsFive,miscHelp,tutorials,license}=result;
    console.log(result.yourName,result.githubu,result.email,result.projectRepo,result.projectTitle,result.projectDescriptionOne,result.projectDescriptionTwo,result.projectDescriptionThree,result.projectDescriptionFour,result.installationOne,result.installationTwo,result.installationThree,result.installationFour,result.installationFive,result.usageOne,result.usageTwo,result.usageThree,result.usageFour,result.usageFive,result.CreditsTwo,result.CreditsThree,result.CreditsFour,result.CreditsFive,result.miscHelp,result.tutorials,result.license);
    const mdFile=`# <${projectTitle}>

## Description

![License](https://img.shields.io/badge/Liscense-${license}-blue.svg "License Badge")

${projectDescriptionOne}

${projectDescriptionTwo}

${projectDescriptionThree}

${projectDescriptionFour}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

${installationOne}

${installationTwo}

${installationThree}

${installationFour}

${installationFive}


## Usage

${usageOne}

${usageTwo}
    
${usageThree}

${usageFour}

${usageFive}


## Credits

${yourName} https://github.com/${githubu} ${email}

${CreditsTwo}

${CreditsThree}

${CreditsFour}

${CreditsFive}

${miscHelp}

${tutorials}


## License

- [License](https://opensource.org/liscenses/${license})
`;
    fs.writeFile("README.md",mdFile,function(error) {
        if(error) {
            console.log("there was an error");
        } else {
            console.log("File saved sucessfully");
        }
    });
});


