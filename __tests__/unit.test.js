// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Phone Number
test('phone number match 1', () => {
    expect(functions.isPhoneNumber('(858)-114-9234')).toBe(true);
});

test('phone number match 2', () => {
    expect(functions.isPhoneNumber('(858)-114-9123')).toBe(true);
});

test('phone number doesn\'t match 1', () => {
    expect(functions.isPhoneNumber('(858)-14-9234')).toBe(false);
});

test('phone number doesn\'t match 2', () => {
    expect(functions.isPhoneNumber('(858)-114')).toBe(false);
});

// Email
test('email number match 1', () => {
    expect(functions.isEmail('yic@ucsd.edu')).toBe(true);
});

test('email number match 2', () => {
    expect(functions.isEmail('iaehiodfhaesbryfeus@ucsd.edu')).toBe(true);
});

test('email number doesn\'t match 1', () => {
    expect(functions.isEmail('(858)-14-9234')).toBe(false);
});

test('email number doesn\'t match 2', () => {
    expect(functions.isEmail('something@something@something')).toBe(false);
});

// Strong PAssword
test('Strong Password 1', () => {
    expect(functions.isStrongPassword('ThisPassWStrong')).toBe(true);
})

test('Strong Password 2', () => {
    expect(functions.isStrongPassword('A1234567')).toBe(true);
})

test('Not Strong Password 1', () => {
    expect(functions.isStrongPassword('d')).toBe(false);
})

test('Not Strong Password 2', () => {
    expect(functions.isStrongPassword('oaehfoiaesyfierasyfiwafhio4qwuafhb4wioqwtyuio4w')).toBe(false);
})

// Date
test('Is Date 1', () => {
    expect(functions.isDate('06/19/2002')).toBe(true);
})

test('Is Date 2', () => {
    expect(functions.isDate('01/01/1970')).toBe(true);
})

test('Is Not Date 1', () => {
    expect(functions.isDate('This is not date')).toBe(false);
})

test('Is Date 2', () => {
    expect(functions.isDate('99/9999/99')).toBe(false);
})

// Hex color
test('Is Hex Color 1', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
})

test('Is Hex Color 2', () => {
    expect(functions.isHexColor('000000')).toBe(true);
})

test('Is not Hex Color 1', () => {
    expect(functions.isHexColor('NOt Hex Color')).toBe(false);
})

test('Is Not Hex Color 2', () => {
    expect(functions.isHexColor('GGGGGG')).toBe(false);
})
