#!/usr/bin/env node

let program = require('commander');
const output = require('./output');
const calc = require('./models/calc')
const binaryDecimalConventer = require('../src/models/binaryDecimalConventer');

program
    .version('1.0.0') //TODO change this to command / option / action schema
    .option('-c, --calc <arg>', 'calculate simple math expression')
    .option('--d2b <args>' , 'convert decimal int into binary')
    .parse(process.argv)


// link models to view (output.js)
if (program.calc) output.printResult(calc(program.calc))
else if (program.d2b) output.printResult(binaryDecimalConventer.decimalToBinary(program.d2b))