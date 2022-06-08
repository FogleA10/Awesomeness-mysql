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
                'Exit'
            ]
        }
    ])

    switch (objVal.choice) {
        case 'View all Employees':
            viewAllEmployess();
            console.log('do something')
            break;
        case 'View all Departments':
            viewAllDepartments();
            console.log('do something else')
            break;
        case 'View all Roles':
            viewAllRoles();
            console.log('Roles');
            break;
        case 'Add a Departments':
            addADepartments();
            console.log('Add-Departments');
            break;
        case 'Add a Role':
            addRole();
            console.log('Add-Role');
            break;
        case 'Add an Employee':
            addEmployee();
            console.log('Add-Employee');
            break;
        case 'Update an Employee Role':
            updateEmployeeRole();
            console.log('Update-Employee');
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
        .then(([data]) => {
            console.table(data1);
        })
        .then(() => {
            mainMenu();
        })

};
function viewAllEmployees() {
    // const data = await db.query('SELECT * FROM employee')
    // console.table(data);
    db.employees()
        .then(([data]) => {
            console.table(data2);
        })
        .then(() => {
            mainMenu();
        })

};
function addADepartments() {

    // const data = await db.query('SELECT * FROM employee')
    // console.table(data);
    db.insertDepartments(department)
        .then(([data]) => {
            console.table(data3);
        })
        .then(() => {
            mainMenu();
        })

};
function addRole() {
    // const data = await db.query('SELECT * FROM employee')
    // console.table(data);
    db.insertRole()
        .then(([data]) => {
            console.table(data4);
        })
        .then(() => {
            mainMenu();
        })

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





// USE LEFT JOIN FOR EMPLOYEES TO GET INFO FROM role  AND department using FOREIGHN KEY
// async function viewAllEmployees () {
//     const data = await db.query('SELECT * FROM employee')
//     console.table(data);
//     mainMenu();
// };
//mimic function on line 59
//
// another series of question with inquirer new department, role, or employee.


async function roleMenu() {
    const departmentChoices = await db.departments()
    const choices = departmentChoices.map(({name,id}) =>  ({ name, value: id }))

    const allRoleChoices = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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

        }

    ])
    await db.insertRoles(allRoleChoices)
    viewAllRoles();
}


//pass them  into the query , insert into the db, call another funciton again to show the table 


mainMenu();