#!/usr/bin/env node

let program = require('commander');
const output = require('./output');
const calc = require('./models/calc')

program
    .version('1.0.0') //TODO change this to command / option / action schema
    .option('-c, --calc <arg>', 'calculate simple math expression')
    .parse(process.argv)


// link models to view (output.js)
if (program.calc) calc(program.calc).then(result => output.printResult(result));