// Requiring all packages
const connection = require('../config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const validate = require('validator');
const figlet = require('figlet');
const chalk = require('chalk');

// Remove Employee
const minusEmployee = () => {
    const sql = ``;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        console.log(chalk.red.bold(`====================================================================================`));
        console.log(``);
        console.log(chalk.redBright.bold(figlet.textSync(``)));
        console.log(``);
        console.table(res);
        console.log(chalk.red.bold(`====================================================================================`));
        promptUser();
    });
};

// Remove Role
const minusRole = () => {
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
const minusDepartment = () => {
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

// Export for External
module.exports = {
    minusEmployee,
    minusRole,
    minusDepartment,
}