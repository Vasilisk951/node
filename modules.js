const os = require('os');
const { userName: user, sayHi } = require('./test');

const name = 'Lolka';

console.log(sayHi(name));

console.log(os.platform(), os.release());