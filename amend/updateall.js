// Requiring all packages
const connection = require('../config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');
const validate = require('validator');
const figlet = require('figlet');
const chalk = require('chalk');

// Update Employee Role
const updateEmployeeRolePrompt = () => {
    const sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.id AS role_id
                    FROM employees, roles, department
                    WHERE department.id = roles.department_id
                    AND roles.id = employees.role_id`;

    connection.query(sql, (error, res) => {
        if (error) throw new Error;

        let employeesNameArray = [];
        res.forEach((employees) => {employeesNameArray.push(`${employees.first_name} ${employees.last_name}`)});

        const sql = `SELECT roles.id, roles.title FROM roles`;
        connection.query(sql, (error, res) => {
            if (error) throw new Error;
            let rolesArray = [];
            res.forEach((roles) => {rolesArray.push(roles.title)});
            
            inquirer.prompt([
                {
                    name: 'chosenEmployee',
                    type: 'list',
                    message: 'Which Employee has a new role?',
                    choices: employeesNameArray,
                },
                {
                    name: 'chosenRole',
                    type: 'list',
                    message: 'What is their new role?',
                    choices: rolesArray,
                }
            ])
            .then((answer) => {
                let newTitleId, employeeId;
                res.forEach((roles) => {
                    if (answer.chosenRole === roles.title) {
                        newTitleId = roles.id
                    }
                });
                res.forEach((employees) => {
                    if (answer.chosenEmployee === `${employees.first_name} ${employees.last_name}`) {
                        employeeId = employees.id
                    }
                });
                const sql = `UPDATE employees
                                SET employees.role_id = ?
                                WHERE employees.id = ?`;
                connection.query(sql, [newTitleId, employeeId], (err) => {
                    if (err) throw new Error;
                    console.log(chalk.cyan.bold(`====================================================================================`));
                    console.log(``);
                    console.log(chalk.magentaBright.bold(figlet.textSync(`Employee's  Role  Updated`)));
                    console.log(``);
                    console.log(chalk.cyan.bold(`====================================================================================`));
                });
            });
        });
    });
};

// Update Employee Manager
const updateEmployeeManagerPrompt = () => {
    const sql = `SELECT employees.id, emeployees.first_name, employees.last_name, employees.manager_id
                    FROM employees`;

    connection.query(sql, (err, res) => {
        if (err) throw new Error;
        
        let employeesNameArray = [];
        res.forEach((employees) => {employeesNameArray.push(`${employees.first_name} ${employees.last_name}`)});

        inquirer.prompt([
            {
                name: 'chosenEmployee',
                type: 'list',
                message: 'Which Employee has a new Manager?',
                choices: employeesNameArray,
            },
            {
                name: 'newManager',
                type: 'list',
                message: 'Who is their Manager?',
                choices: employeesNameArray
            }
        ])
        .then((answer) => {
            let employeeId, managerId;
            res.forEach((employees) => {
                if (answer.chosenEmployee === `${employees.first_name} ${employees.last_name}`) {
                    employeeId = employees.id;
                }
                if (answer.newManager === `${employees.first_name} ${employees.last_name}`) {
                    managerId = employee.id;
                }
            });

            if (validate.isSame(answer.chosenEmployee, answer.newManager)) {
                console.log(chalk.red.bold(`====================================================================================`));
                console.log(chalk.redBright.bold(figlet.textSync(`Invalid  Manager  Selection`)));
                console.log(chalk.red.bold(`====================================================================================`));
            } else {
                const sql = `UPDATE employees
                                SET employees.manager_id = ?
                                WHERE employees.id = ?`;
                connection.query(sql, [managerId, employeeId], (err) => {
                    if (err) throw new Error;
                    console.log(chalk.cyan.bold(`====================================================================================`));
                    console.log(``);
                    console.log(chalk.magentaBright.bold(figlet.textSync(`Employee's  Manager  Updated`)));
                    console.log(``);
                    console.log(chalk.cyan.bold(`====================================================================================`));
                });
            }
        });
    });
};

module.exports = {
    updateEmployeeRolePrompt,
    updateEmployeeManagerPrompt,
};