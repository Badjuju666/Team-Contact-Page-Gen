
const fs = require('fs')
const Inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let allMonkeys = []

function headManager() {
    Inquirer.prompt([
        {
            type:'input',
            name:'managername',
            message:'Enter their name.',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their name.");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'managerid',
            message:'Enter their ID number.',
            validate: input => {
                if(input) {
                    return true;
                } else {
                    console.log("Enter their Id.");
                    return false;
                }
            }

        },
        {
            type:'input',
            name:'manageremail',
            message:'Enter their email address.',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their email.");
                    return false;
                }
            }
        },
        {
            type:'input', 
            name:'officenumber',
            message:'Enter the office phone number.',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their phone number.");
                    return false;
                }
            }
        }
    ]).then(response => {
        let makeManager = new Manager(response.managername, response.managerid, response.manageremail, response.officenumber)
        allMonkeys.push(makeManager)
        addMonkey()
    })
}

function addMonkey(){
    Inquirer.prompt([
        {
            type:'list',
            name:'addmonkey',
            message:'Select the type of Employee you are adding. After completion- generate your page.',
            choices:["New Engineer", "New Intern", "Generate your contacts page!"]
        }
    ]).then(response => {
        if(response.addmonkey == "New Engineer") {
            makeEngineer(); 
        } else if(response.addmonkey == "New Intern") {
            makeIntern(); 
        } else if (response.addmonkey == "Generate your contacts page!") {
            HTML = generatePage(allMonkeys); 
            writeToFile("./index.html", HTML);
            console.log('wrote file')
            process.exit()
        }
    })
}

function makeEngineer(){
    Inquirer.prompt([
        {
            type:'input',
            name:'engineername',
            message:'What is the name of the engineer?',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their name.");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'engineerid',
            message:'What is the ID number of the engineer?',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their Id.");
                    return false;
                }
            }
        }, 
        {
            type:'input',
            name:'engineeremail',
            message:'What is the email address of the engineer?',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their email.");
                    return false;
                }
            }
        }, 
        {
            type:'input', 
            name:'github',
            message:'What is the github username of the engineer?',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their github username.");
                    return false;
                }
            }
        }
    ]).then(response => {
        let makeEngineer = new Engineer(response.engineername, response.engineerid, response.engineeremail, response.github)
        allMonkeys.push(makeEngineer)
        addMonkey()
    })
}

function makeIntern() {
    Inquirer.prompt([
        {
            type:'input',
            name:'internname',
            message:'Enter their name.',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their name.");
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'internid',
            message:'What their ID number.',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their Id.");
                    return false;
                }
            }
        }, 
        {
            type:'input',
            name:'internemail',
            message:'Enter their email address.',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their email.");
                    return false;
                }
            }
        }, 
        {
            type:'input', 
            name:'school',
            message:'Enter the school they attend.',
            validate: input => {
              if(input) {
                return true;
                } else {
                    console.log("Enter their school place.");
                    return false;
                }
            }
        }
    ]).then(response => {
        let makeIntern = new Intern(response.internname, response.internid, response.internemail, response.school)
        allMonkeys.push(makeIntern)
        addMonkey()
    })
}

function generatePage(allMonkeys){
    HTML =
`
<!DOCTYPE html> 
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  <link rel="stylesheet" href="./dist/style.css">
  <title>Your Team</title>
</head>

<body>
  <h1>Teamates</h1>
  <main class="container">
`
    for(i = 0; i < allMonkeys.length; i++){
        HTML += allMonkeys[i].card
    }
    HTML += 
`
</div>
</main>
</body>
</html> 
`;

    const arrival = allMonkeys.filter(kaRen => kaRen.getRole() === 'Manager');
    manager = arrival[0];
    return HTML
};
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, err => {
        if(err) {
            console.log(err)
        } else {console.log('Wrote to file')}        
    })
}

console.log("Please add one manager")
headManager();
