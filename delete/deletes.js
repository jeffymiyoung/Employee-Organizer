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
    const sql = `SELECT roles.id, roles.title FROM roles`;
    connection.query(sql, (error, res) => {
        if (error) throw new Error;
        let rolesArray = [];
        res.forEach((roles) => {rolesArray.push(roles.title)});

        inquirer.prompt([
            {
                name: 'selectRole',
                type: 'list',
                message: 'Which role would you like to remove?',
                choices: rolesArray
            }
        ])
        .then((answer) => {
            let roleId;
            res.forEach((roles) => {
                if (answer.selectRole === roles.title) {
                    roleId = roles.id;
                }
            });
            
            const sql = `DELETE FROM roles
                            WHERE roles.id = ?`;
            connection.query(sql, [roleId], (error, res) => {
                if (error) throw new Error;

                console.log(chalk.red.bold(`====================================================================================`));
                console.log(``);
                console.log(chalk.redBright.bold(figlet.textSync(`Role Successfully Removed!`)));
                console.log(``);
                console.log(chalk.red.bold(`====================================================================================`));
            });
        });
    });
};

// Remove Department
const minusDepartment = () => {
    const sql = `SELECT department.id, department.department_name FROM department`;
    connection.query(sql, (error, res) => {
        if (error) throw new Error;
        let departmentsArray = [];
        res.forEach((department) => {departmentsArray.push(department.department_name)});

        inquirer.prompt([
            {
                name: 'selectDepartment',
                type: 'list',
                message: 'Which Department would you like to remove?',
                choices: departmentsArray
            },
        ])
        .then((answer) => {
            let departmentId;
            res.forEach((department) => {
                if (answer.selectDepartment === department.department_name) {
                    departmentId = department.id;
                }
            });
            const sql = `DELETE FROM department
                            WHERE department.id = ?`;
            connection.query(sql, [departmentId], (error, res) => {
                if (error) throw new Error;

                console.log(chalk.red.bold(`====================================================================================`));
                console.log(``);
                console.log(chalk.redBright.bold(figlet.textSync(`Role Successfully Removed!`)));
                console.log(``);
                console.log(chalk.red.bold(`====================================================================================`));
            })
        })
    })

};

// Export for External
module.exports = {
    minusEmployee,
    minusRole,
    minusDepartment,
}