// Requiring all packages
const connection = require('../config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const validate = require('validator');
const figlet = require('figlet');
const chalk = require('chalk');

// Add Employee
const upEmployee = () => {
    const sql = `SELECT * FROM employees`;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        const employees = res.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));

        const rolesql = `SELECT roles.id, roles.title FROM roles`;
        connection.query(rolesql, (error, res) => {
            if (error) throw new Error;
            const roles = res.map(({ id, title }) => ({ name: title, value: id}));

            inquirer.prompt([
                {
                    name: 'firstName',
                    type: 'input',
                    message: "What is the Employee's first name?",
                    validate: addFirstName => {
                        if(addFirstName) {
                            return true;
                        } else {
                            console.log('Please enter a first name!');
                            return false;
                        }
                    }
                },
                {
                    name: 'lastName',
                    type: 'input',
                    message: "What is the Employee's last name?",
                    validate: addLastName => {
                        if(addLastName) {
                            return true;
                        } else {
                            console.log('Please enter a last name!');
                            return false;
                        }
                    }
                },
                {
                    name: 'role',
                    type: 'list',
                    message: "What is the Employee's role?",
                    choices: roles
                },
                {
                    name: 'manager',
                    type: 'list',
                    message: "Who is the Employee's Manager?",
                    choices: employees
                },
            ])
            .then((answer) => {
                const input = [answer.firstName, answer.lastName, answer.role, answer.manager];
                const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                                VALUES (?, ?, ?, ?)`;
                connection.query(sql, input, (error, res) => {
                    if (error) throw new Error;

                    console.log(chalk.green.bold(`====================================================================================`));
                    console.log(``);
                    console.log(chalk.greenBright.bold(figlet.textSync(`New Employee Added!`)));
                    console.log(``);
                    console.log(chalk.green.bold(`====================================================================================`));
                })
            });
        });
    });
};

// Add Role
const upRole = () => {
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
const upDepartment = () => {
    const sql = `INSERT INTO department (department_name) VALUES (?)`;

    inquirer.prompt([
        {
            name: 'newDepartment',
            type: 'input',
            message: 'What is the name of your new Department?',
            validate: validate.validateString
        },
    ])
    .then((answer) => {
        connection.query(sql, answer.newDepartment, (error, res) => {
            if (error) throw new Error;
            console.log(chalk.green.bold(`====================================================================================`));
            console.log(``);
            console.log(chalk.greenBright.bold(figlet.textSync(answer.newDepartment + `  Department Created!`)));
            console.log(``);
            console.log(chalk.green.bold(`====================================================================================`));
        });
    });
};

// Export for External
module.exports = {
    upEmployee,
    upRole,
    upDepartment,
}