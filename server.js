// Requiring all packages
const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const validate = require('validator');
const figlet = require('figlet');
const chalk = require('chalk');

// Linking Equations
const { allEmployees, allRoles, allDepartments, EmployeeDepartments, departmentBudgets} = require('./observe/viewall.js');

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
    setTimeout(promptUser, 300);
};

// View All Roles
const viewRoles = () => {
    allRoles();
    setTimeout(promptUser, 300);
};

// View All Departments
const viewDepartments = () => {
    allDepartments();
    setTimeout(promptUser, 300);
};

// View All Employees by Department
const viewEmployeesByDepartment = () => {
    EmployeeDepartments();
    setTimeout(promptUser, 300);
};

// View Department Budgets
const viewDepartmentBudget = () => {
    departmentBudgets();
    setTimeout(promptUser, 300);
};

// Update Employee Role
const updateEmployeeRole = () => {
    const sql = ``;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(``)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// Update Employee Manager
const updateEmployeeManager = () => {
    const sql = ``;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(``)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// Add Employee
const addEmployee = () => {
    const sql = ``;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(``)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// Add Role
const addRole = () => {
    const sql = ``;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(``)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// Add Department
const addDepartment = () => {
    const sql = ``;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(``)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// Remove Employee
const removeEmployee = () => {
    const sql = ``;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(``)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// Remove Role
const removeRole = () => {
    const sql = ``;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(``)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// Remove Department
const removeDepartment = () => {
    const sql = ``;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(``)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};