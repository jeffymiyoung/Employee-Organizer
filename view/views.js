// Requiring all packages
const connection = require('../config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const validate = require('validator');
const figlet = require('figlet');
const chalk = require('chalk');

// viewAll Employees
const allEmployees = () => {
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
    });
};

// View By Roles
const allRoles = () => {
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
    });
};

const allDepartments = () => {
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
    });
};

const EmployeeDepartments = () => {
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
    });
};

const departmentBudgets = () => {
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
    });
};

module.exports = {
    allEmployees,
    allRoles,
    allDepartments,
    EmployeeDepartments,
    departmentBudgets,
};