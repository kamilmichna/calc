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
  return mathjs.eval(toCalculate);
}

var calc_1 = calc;

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function decimalToBinary(decimalInteger) {
  var binaryString = '';

  while (decimalInteger > 0) {
    if (decimalInteger % 2 === 1) {
      binaryString = ['1'].concat(_toConsumableArray(binaryString));
    } else {
      binaryString = ['0'].concat(_toConsumableArray(binaryString));
    }

    decimalInteger = Math.floor(decimalInteger / 2);
  }

  return binaryString.join('');
}

var binaryDecimalConventer = {
  decimalToBinary: decimalToBinary
};

commander.version('1.0.0') //TODO change this to command / option / action schema
.option('-c, --calc <arg>', 'calculate simple math expression').option('--d2b <args>', 'convert decimal int into binary').parse(process.argv); // link models to view (output.js)

if (commander.calc) output.printResult(calc_1(commander.calc));else if (commander.d2b) output.printResult(binaryDecimalConventer.decimalToBinary(commander.d2b));
var main = {};

module.exports = main;
