// Requiring all packages
const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const validate = require('validator');
const figlet = require('figlet');
const chalk = require('chalk');

// Linking Equations
const { allEmployees, allRoles, allDepartments, EmployeeDepartments, departmentBudgets} = require('./view/views.js');
const { updateEmployeeRolePrompt, updateEmployeeManagerPrompt } = require('./update/updates.js');
const { upEmployee, upRole, upDepartment } = require('./add/adds.js');
const { minusEmployee, minusRole, minusDepartment, } = require('./delete/deletes.js');

// DB Connection and opening title
connection.connect((error) => {
    if(error) throw error;
    console.log(chalk.cyan.bold(`====================================================================================`));
    console.log(``);
    console.log(``);
    console.log(chalk.magentaBright.bold(figlet.textSync(`Employee  Organizer`)));
    console.log(``);
    console.log(``);
    console.log(chalk.cyan.bold(`====================================================================================`));
    promptUser();
});

// Prompts User for choice input
const promptUser = () => {
    inquirer.prompt([
        {
            name: 'choices',
            type: 'list',
            message: 'Please Select an Option:',
            choices: [
                'View All Employees',
                'View All Roles',
                'View All Departments',
                'View All Employees by Department',
                'View Department Budgets',
                'Update Employee Role',
                'Update Employee Manager',
                'Add Employee',
                'Add Role',
                'Add Department',
                'Remove Employee',
                'Remove Role',
                'Remove Department',
                'Exit'
            ]
        }
    ])
    .then((answers) => {
        const { choices } = answers;

        if (choices === 'View All Employees') {
            viewEmployees();
        }
        if (choices === 'View All Roles') {
            viewRoles();
        }
        if (choices === 'View All Departments') {
            viewDepartments();
        }
        if (choices === 'View All Employees by Department') {
            viewEmployeesByDepartment();
        }
        if (choices === 'View Department Budgets') {
            viewDepartmentBudget();
        }
        if (choices === 'Update Employee Role') {
            updateEmployeeRole();
        }
        if (choices === 'Update Employee Manager') {
            updateEmployeeManager();
        }
        if (choices === 'Add Employee') {
            addEmployee();
        }
        if (choices === 'Add Role') {
            addRole();
        }
        if (choices === 'Add Department') {
            addDepartment();   
        }
        if (choices === 'Remove Employee') {
            removeEmployee();
        }
        if (choices === 'Remove Role') {
            removeRole();
        }
        if (choices === 'Remove Department') {
            removeDepartment();
        }
        if (choices === 'Exit') {
            connection.end();
        }
    });
};

//  -- SQL Functions --
// View All Employees
const viewEmployees = () => {
    allEmployees();
    setTimeout(promptUser, 1000);
};

// View All Roles
const viewRoles = () => {
    allRoles();
    setTimeout(promptUser, 1000);
};

// View All Departments
const viewDepartments = () => {
    allDepartments();
    setTimeout(promptUser, 1000);
};

// View All Employees by Department
const viewEmployeesByDepartment = () => {
    EmployeeDepartments();
    setTimeout(promptUser, 1000);
};

// View Department Budgets
const viewDepartmentBudget = () => {
    departmentBudgets();
    setTimeout(promptUser, 1000);
};

// Update Employee Role
const updateEmployeeRole = () => {
    updateEmployeeRolePrompt();
    setTimeout(promptUser, 20000);
};

// Update Employee Manager
const updateEmployeeManager = () => {
    updateEmployeeManagerPrompt();
    setTimeout(promptUser, 20000);
};

// Add Employee
const addEmployee = () => {
    upEmployee();
    setTimeout(promptUser, 20000);
};

// Add Role
const addRole = () => {
    upRole();
    setTimeout(promptUser, 20000);
};

// Add Department
const addDepartment = () => {
    upDepartment();
    setTimeout(promptUser, 20000);
};

// Remove Employee
const removeEmployee = () => {
    minusEmployee();
    setTimeout(promptUser, 20000);
};

// Remove Role
const removeRole = () => {
    minusRole();
    setTimeout(promptUser, 20000);
};

// Remove Department
const removeDepartment = () => {
    minusDepartment();
    setTimeout(promptUser, 20000);
};