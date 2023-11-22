const fs = require('fs');

// читаем файл
const pathToFile = 'd02/info.txt';
const data = fs.readFileSync(pathToFile, { encoding: 'utf8', flag: 'r' });

console.log(data);
console.log(typeof data);

//split the file line by line
let dataArr = data.split('\n');
dataArr = dataArr.filter(line => line.trim() !== '')
console.log(dataArr);