#!/usr/bin/env node
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var commander = _interopDefault(require('commander'));
var chalk = _interopDefault(require('chalk'));
var mathjs = _interopDefault(require('mathjs'));

var prepender = "".concat(chalk.white.bold.inverse('calc.js'), " ").concat(chalk.cyan.bold('output is:'));

function printResult(result) {
  console.log("".concat(prepender, " ").concat(chalk.blue.bold(result)));
}

var output = {
  printResult: printResult
};

function calc(toCalculate) {
  toCalculate = String(toCalculate);
  return new Promise(function (res, rej) {
    res(mathjs.eval(toCalculate));
  });
}

var calc_1 = calc;

commander.version('1.0.0') //TODO change this to command / option / action schema
.option('-c, --calc <arg>', 'calculate simple math expression').parse(process.argv); // link models to view (output.js)

if (commander.calc) calc_1(commander.calc).then(function (result) {
  return output.printResult(result);
});
var main = {};

module.exports = main;
