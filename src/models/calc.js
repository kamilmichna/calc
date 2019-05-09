const math = require('mathjs');
function calc(toCalculate){
    toCalculate = String(toCalculate);
    return  math.eval(toCalculate);
}

module.exports = calc;