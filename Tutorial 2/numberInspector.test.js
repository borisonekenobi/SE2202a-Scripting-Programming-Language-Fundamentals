const main = require('./numberInspector.js');

let Palindrome = main.Palindrome;
let MaxDigit = main.MaxDigit;
let DuplicateNumber = main.DuplicateNumber;
let MakeDivisibleBy = main.MakeDivisibleBy;

test('Testing Palindrome with value 0', () => {expect(Palindrome(0)).toBe('0')});
test('Testing Palindrome with value 101', () => {expect(Palindrome(101)).toBe('101')});
test('Testing Palindrome with value 12745', () => {expect(Palindrome(12745)).toBe('54721')});
test('Testing Palindrome with value 54321', () => {expect(Palindrome(54321)).toBe('12345')});
test('Testing Palindrome with value 99999', () => {expect(Palindrome(99999)).toBe('99999')});
test('Testing Palindrome with value 98811', () => {expect(Palindrome(98811)).toBe('11889')});
test('Testing Palindrome with value 34', () => {expect(Palindrome(34)).toBe('43')});
test('Testing Palindrome with value 9', () => {expect(Palindrome(9)).toBe('9')});
test('Testing Palindrome with value 88234', () => {expect(Palindrome(88234)).toBe('43288')});


test('Testing MaxDigit with value 0', () => {expect(MaxDigit(0)).toBe(0)});
test('Testing MaxDigit with value 101', () => {expect(MaxDigit(101)).toBe(1)});
test('Testing MaxDigit with value 12745', () => {expect(MaxDigit(12745)).toBe(7)});
test('Testing MaxDigit with value 54321', () => {expect(MaxDigit(54321)).toBe(5)});
test('Testing MaxDigit with value 99999', () => {expect(MaxDigit(99999)).toBe(9)});
test('Testing MaxDigit with value 98811', () => {expect(MaxDigit(98811)).toBe(9)});
test('Testing MaxDigit with value 34', () => {expect(MaxDigit(34)).toBe(4)});
test('Testing MaxDigit with value 9', () => {expect(MaxDigit(9)).toBe(9)});
test('Testing MaxDigit with value 88234', () => {expect(MaxDigit(88234)).toBe(8)});

test('Testing DuplicateNumber with value 0', () => {expect(DuplicateNumber(0)).toBe(false)});
test('Testing DuplicateNumber with value 101', () => {expect(DuplicateNumber(101)).toBe(false)});
test('Testing DuplicateNumber with value 12745', () => {expect(DuplicateNumber(12345)).toBe(false)});
test('Testing DuplicateNumber with value 54331', () => {expect(DuplicateNumber(54331)).toBe(true)});
test('Testing DuplicateNumber with value 99999', () => {expect(DuplicateNumber(99999)).toBe(true)});
test('Testing DuplicateNumber with value 97811', () => {expect(DuplicateNumber(97811)).toBe(true)});
test('Testing DuplicateNumber with value 33', () => {expect(DuplicateNumber(33)).toBe(true)});
test('Testing DuplicateNumber with value 9', () => {expect(DuplicateNumber(9)).toBe(false)});
test('Testing DuplicateNumber with value 88234', () => {expect(DuplicateNumber(88234)).toBe(true)});

test('Testing MakeDivisibleBy with value 65 and 5', () => {expect(MakeDivisibleBy(65,5)).toBe(0)});
test('Testing MakeDivisibleBy with value 98 and 3', () => {expect(MakeDivisibleBy(98,3)).toBe(1)});
test('Testing MakeDivisibleBy with value 52 and 54', () => {expect(MakeDivisibleBy(52,54)).toBe(2)});
test('Testing MakeDivisibleBy with value 40 and 6', () => {expect(MakeDivisibleBy(40,6)).toBe(2)});
test('Testing MakeDivisibleBy with value 20 and 2', () => {expect(MakeDivisibleBy(20,2)).toBe(0)});
