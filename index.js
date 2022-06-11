const inquirer = require("inquirer");
require("console.table");
const db = require("./db")
const mysql = require("mysql2");

async function mainMenu() {
    const objVal = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View all Employees',
                'View all Departments',
                "View all Roles",
                'Add a Role',
                'Add a Departments',
                'Add an Employee',
                'Exit'
            ]
        }
    ])

    switch (objVal.choice) {
        case 'View all Employees':
            // done
            viewAllEmployees();
            break;
        case 'View all Departments':
            // done
            viewAllDepartments();
            break;
        case 'View all Roles':
            // done
            viewAllRoles();
            break;
        case 'Add a Departments':
            // done
            addADepartments();
            break;
        case 'Add a Role':
            // done
            addRole();
            break;
        case 'Add an Employee':
            // done
            addEmployee();
            break;
        case 'Update an Employee Role':
            // todo (bonus)
            updateEmployeeRole();
            break;
    }
}



function viewAllDepartments() {
    // const data = await db.query('SELECT * FROM employee')
    // console.table(data);
    db.departments()
        .then(([data]) => {
            console.table(data);
        })
        .then(() => {
            mainMenu();
        })

};
function viewAllRoles() {
    // const data = await db.query('SELECT * FROM employee')
    // console.table(data);
    db.roles()
        .then((data) => {
            console.table(data[0]);
        })
        .then(() => {
            mainMenu();
        })

};
function viewAllEmployees() {
    // const data = await db.query('SELECT * FROM employee')
    // console.table(data);
    db.allEmployees()
        .then(([data]) => {
            console.table(data);
        })
        .then(() => {
            mainMenu();
        })

};
async function addADepartments() {

    const departmentChoices = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the department name?',
        },
    ])
    await db.insertDepartment(departmentChoices);

    await viewAllDepartments()

    mainMenu();

};
async function addRole() {

    await roleMenu();

    mainMenu();

};

async function addEmployee() {

    const roleChoices = await db.roles()
    const choices = roleChoices[0].map(({title,id}) =>  ({ name: title, value: id }))

    const managerChoices = await db.allEmployees();
    const mChoices = managerChoices[0].map(({first_name, last_name ,id}) =>  ({ name: `${first_name} ${last_name}`, value: id }));


    const employeeChoices = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'what is the employee first name?',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'what is the employee last name?',
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Choice a role',
            choices 
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Choice a role',
            choices: mChoices
        }

    ])
    await db.insertEmployee(employeeChoices);

    await viewAllEmployees()

    mainMenu();
};

function updateEmployeeRole() {
    // const data = await db.query('SELECT * FROM employee')
    // console.table(data);
    db.departments()
        .then(([data]) => {
            console.table(data5);
        })
        .then(() => {
            mainMenu();
        })

};





// another series of question with inquirer new department, role, or employee.


async function roleMenu() {
    const departmentChoices = await db.departments();
    const choices = departmentChoices[0].map(({name,id}) =>  ({ name, value: id }));

    const allRoleChoices = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the role?',
        },
        {
            type: 'number',
            name: 'salary',
            message: 'How much is the salary?',

        },
        {
            type: 'list',
            name: 'department_id',
            message: 'Choice a department',
            choices 
        },

    ]);

    await db.insertRoles(allRoleChoices)
    await viewAllRoles()
}


mainMenu();