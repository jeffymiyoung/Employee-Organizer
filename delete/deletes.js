// Requiring all packages
const connection = require('../config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const validate = require('validator');
const figlet = require('figlet');
const chalk = require('chalk');

// Remove Employee
const minusEmployee = () => {
    const sql = `SELECT employees.id, employees.first_name, employees.last_name FROM employees`;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;
        let employeesArray = [];
        res.forEach((employees) => {employeesArray.push(`${employees.first_name} ${employees.last_name}`)});

        inquirer.prompt([
            {
                name: 'selectEmployee',
                type: 'list',
                message: 'Which Employee would you like to remove?',
                choices: employeesArray
            },
        ])
        .then((answer) => {
            let employeeId;

            res.forEach((employees) => {
                if (answer.selectEmployee === `${employees.first_name} ${employees.last_name}`) {
                    employeeId = employees.id;
                }
            });
            const sql = `DELETE FROM employees
                            WHERE employees.id =?`;
            connection.query(sql, [employeeId], (error, res) => {
                if(error) throw new Error;

                console.log(chalk.red.bold(`====================================================================================`));
                console.log(``);
                console.log(chalk.redBright.bold(figlet.textSync(`Employee Successfully Removed!`)));
                console.log(``);
                console.log(chalk.red.bold(`====================================================================================`));
            });
        });
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