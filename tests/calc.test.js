const calc = require('../src/models/calc');


test('add 2+2 to be equal 4',()=>{
    expect(calc('2+2')).toBe(4);
})

test('calc 2+2*2 to be equal 6', () => {
    expect(calc('2+2*2')).toBe(6);
})

test('calc (2+2)*2 to be equal 8', () => {
    expect(calc('(2+2)*2')).toBe(8);
})

test('calc (2+2 to throw error - ) expected', () => {
    expect(()=>{
        calc('(2-2')
    }).toThrowError();
})