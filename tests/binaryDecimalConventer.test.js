const binaryDecimalConventer = require('../src/models/binaryDecimalConventer');



test('10 in dec returns 1010',()=>{
    expect(binaryDecimalConventer.decimalToBinary(10)).toBe('1010');
})
