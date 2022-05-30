// Requiring all packages
const connection = require('./config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const validate = require('validator');
const figlet = require('figlet');
const chalk = require('chalk');

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
    const sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.title, department.department_name AS department, roles.salary
                FROM employees, roles, department
                WHERE department.id = roles.department_id
                AND roles.id = employees.role_id
                ORDER BY employees.id ASC`;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(`Current  Employees:`)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// View All Roles
const viewRoles = () => {
    const sql = `SELECT roles.id, roles.title, department.department_name AS department, roles.salary
                    FROM roles
                    INNER JOIN department ON roles.department_id = department.id`;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(`Current  Employee  Roles:`)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// View All Departments
const viewDepartments = () => {
    const sql = `SELECT department.id AS id, department.department_name AS department
                    FROM department`;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(`Current  Departments:`)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// View All Employees by Department
const viewEmployeesByDepartment = () => {
    const sql = `SELECT employees.first_name, employees.last_name, department.department_name AS department
                    FROM employees
                    LEFT JOIN roles ON employees.role_id = roles.id
                    LEFT JOIN department ON roles.department_id = department.id`;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(`Employees  by  Department:`)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
};

// View Department Budgets
const viewDepartmentBudget = () => {
    const sql = `SELECT department_id AS id, department.department_name AS department, 
                    SUM(salary) AS budget
                    FROM roles
                    INNER JOIN department ON roles.department_id = department.id GROUP BY roles.department_id`;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.cyan.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.magentaBright.bold(figlet.textSync(`Department  Budgets:`)));
        console.log(``);
        console.table(res);
        console.log(chalk.cyan.bold(`====================================================================================`));
        promptUser();
    });
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