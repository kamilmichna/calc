const chalk = require('chalk');

const prepender = `${chalk.white.bold.inverse('calc.js')} ${chalk.cyan.bold('output is:')}`;

function printResult(result){
    console.log(`${prepender} ${chalk.blue.bold(result)}`);
}

module.exports = {printResult};