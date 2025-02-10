const constructorFunctions = require('./constructorFunctions')
const classNotation = require('./classNotation');

let attack1 = new constructorFunctions.AttackConstructor('flying', 30);
let monster1 = new constructorFunctions.MonsterConstructor('Fairy', 300, [attack1]);

test('Monster is a constructor',() => {expect(Object.getPrototypeOf(constructorFunctions.MonsterConstructor)==Function.prototype).toBe(true)});
test('Attack is a constructor',() => {expect(Object.getPrototypeOf(constructorFunctions.AttackConstructor)==Function.prototype).toBe(true)});

test('monster attack is part of object',() => {expect(monster1.monsterAttack()).toBe(30)});

test('getStrength is in prototype',() => {expect(constructorFunctions.MonsterConstructor.prototype.getStrength.call({strength:1000})).toBe(1000)});
test('getDamaged is in prototype',() => {expect(constructorFunctions.MonsterConstructor.prototype.getDamaged.call({strength:1000},100)).toBe(900)});

test('Monster Constructor is a function',() => {expect(Object.getPrototypeOf(constructorFunctions.MonsterConstructor)==Function.prototype).toBe(true)});
test('Attack Constructor is a function',() => {expect(Object.getPrototypeOf(constructorFunctions.AttackConstructor)==Function.prototype).toBe(true)});

test('Monster Constructor is not a class constructor',() => {expect(constructorFunctions.MonsterConstructor.constructor.toString().substring(0, 5) === 'class').toBe(false)});
test('Attack Constructor is not a class',() => {expect(constructorFunctions.AttackConstructor.constructor.toString().substring(0, 5) === 'class').toBe(false)});

test('monster class is a class ',() => {expect(classNotation.MonsterClass.prototype.constructor.toString().substring(0, 5) === 'class').toBe(true)});
test('attack class is a class',() => {expect(classNotation.AttackClass.prototype.constructor.toString().substring(0, 5) === 'class').toBe(true)});

test('not same code',() => {expect(constructorFunctions.AttackConstructor.prototype!==classNotation.AttackClass.prototype).toBe(true)});
