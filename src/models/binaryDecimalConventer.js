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


module.exports = {decimalToBinary}