const fs = require('fs');
const { encode } = require('punycode');

//read json file

const data = fs.readFileSync('./d_05/example_2.json', { encoding: 'utf8' });

console.log(data);

let dataObj = JSON.parse(data);

console.log(dataObj);
