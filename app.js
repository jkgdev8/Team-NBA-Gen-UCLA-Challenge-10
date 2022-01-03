const inquirer = require("inquirer");
const fs = require("fs");
const Coach = require("./lib/Coach");
const Players = require("./lib/Players");
const GM = require("./lib/GM");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Enter member's name:",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role:",
        choices: [
            "GM",
            "Coach",
            "Players"
        ],
        name: "role"
    },
    {
        message: "Enter member's id / jersey:",
        name: "id"
    },
    {
        message: "Enter member's email address:",
        name: "email"
    },
    
  
    ])
    .then(function({name, role, id, email }) {
        let roleInfo = "";
       
        if (role === "Players") {
            roleInfo = "Position Played:";
        } else if (role === "Players") {
            roleInfo = "Years Left On Contract:";
        } 

         else  {
            roleInfo = "Years Left On Contract";
        }

         
        inquirer.prompt([{
            message: `Enter  ${roleInfo}`,
            name: "roleInfo"
        },

        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Coach") {
                newMember = new Coach(name, id, email, roleInfo);
            } else if (role === "Players") {
                newMember = new Players(name, id, email, roleInfo);
            } else {
                newMember = new GM(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}



function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Create Your NBA TEAM!</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Start Your NBA TEAM Simulation</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        
       
        
        let data = "";
        if (role === "Coach") {
            const contract = member.getContract();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header" >${name}<br /><br />Coach</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Years Left On Contract: ${contract}</li>
                
            </ul>
            </div>
        </div>`;
        } else if (role === "Players") {
            const position = member.getPosition();
            
            
            
            
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header" >${name}<br /><br />Players</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Jersey #: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Position Played: ${position}</li>
                
                
                
                
                
                
                
                
                
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getcontract();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />GM</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Years Left On Contract: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Congrats! You Created an NBA Team!");
}

initApp();
//