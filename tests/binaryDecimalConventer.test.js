const binaryDecimalConventer = require('../src/models/binaryDecimalConventer');



test('10 in dec returns 1010',()=>{
    expect(binaryDecimalConventer.decimalToBinary(10)).toBe('1010');
})

test('1010 returns 10', () => {
    expect(binaryDecimalConventer.binaryToDecimal(1010)).toBe('10');
})