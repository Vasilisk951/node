//примеры подключения именованного модуля

const { randomInt } = require('./example_module');

console.log(randomInt())

const func = require('./example_module').randomInt;

console.log(func())

const func2 = require('./example_module');

console.log(func2.randomInt())