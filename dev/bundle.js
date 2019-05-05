#!/usr/bin/env node
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var commander = _interopDefault(require('commander'));

commander.option('-c, --calc', 'simple calculation').parse(process.argv);
if (commander.calc) console.log('asd');
var main = {};

module.exports = main;
