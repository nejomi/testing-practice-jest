import { capitalize, reverse, calculator, caesarCipher, analyze } from './app';

// capitalize function tests
test('Capitalize - capitalize first letter of the string', () => {
  expect(capitalize('blaise')).toBe('Blaise');
});

test('Capitalize - dont change letter if already capitalized', () => {
  expect(capitalize('Gian')).toBe('Gian');
});

test('Capitalize - if first character is a number, dont do anything', () => {
  expect(capitalize('1benta')).toBe('1benta');
});

// reverse function tests
test('Reverse - reverse the string', () => {
  expect(reverse('blaise')).toBe('esialb');
});

test('Reverse - reverse even if string consists of numbers', () => {
  expect(reverse('1234')).toBe('4321');
});

// calculator object tests
test('Calculator - sum', () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test('Calculator - sum (2)', () => {
  expect(calculator.add(1000, 314)).toBe(1314);
});

test('Calculator - subtract', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('Calculator - subtract (2)', () => {
  expect(calculator.subtract(5, 12)).toBe(-7);
});

test('Calculator - divide', () => {
  expect(calculator.divide(15, 5)).toBe(3);
});

test('Calculator - divide (2)', () => {
  expect(calculator.divide(7, 2)).toBe(3.5);
});

test('Calculator - multiply', () => {
  expect(calculator.multiply(4, 3)).toBe(12);
});

test('Calculator - multiply', () => {
  expect(calculator.multiply(5, -2)).toBe(-10);
});

// caesar cipher tests
test('Cipher', () => {
  expect(caesarCipher('ATTACKATONCE', 13)).toBe('NGGNPXNGBAPR');
});
test('Cipher (2)', () => {
  expect(caesarCipher('ATTaCKAtONCe', 13)).toBe('NGGnPXNgBAPr');
});
test('Cipher (3)', () => {
  expect(caesarCipher('prasha', 13)).toBe('cenfun');
});

// array analysis tests

test('Array analysis', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    length: 6,
    average: 4,
    max: 8,
    min: 1,
  });
});
