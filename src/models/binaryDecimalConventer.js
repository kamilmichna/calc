function decimalToBinary(decimalInteger){
    let binaryString = '';
    while (decimalInteger > 0){
        if (decimalInteger%2===1){
            binaryString = ['1',...binaryString];
        }
        else{
            binaryString = ['0',...binaryString];
        }
        decimalInteger = Math.floor(decimalInteger/2);
    }
    return binaryString.join('');
}

function binaryToDecimal(binaryInteger){
    binaryInteger = binaryInteger.toString().split("").reverse();
    let arrayToSum = [];
    binaryInteger.map((val,idx)=>{
        arrayToSum.push(val*Math.pow(2,idx));
    })
    binaryInteger = arrayToSum.reduce((data,el)=>{
        return data + el;
    })
    return binaryInteger.toString();
}

module.exports = {decimalToBinary,binaryToDecimal}