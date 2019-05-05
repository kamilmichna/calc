const math = require('mathjs');
function calc(toCalculate){
    toCalculate = String(toCalculate);
    return new Promise((res,rej)=>{
        res(math.eval(toCalculate));
    })
}

module.exports = calc;