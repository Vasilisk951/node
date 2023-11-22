const fs = require('fs');

const text = 'Азимут удивился, выплюнул два зуба и прохрипел: \r\n- Пронесло! это было как-то блуждающая комета...\r\nТолько я раскрыл рот, чтобы лоб в лоб, когда снова - трох-торорох!\r\n';

//write to file
const pathToFile = 'd02/n_1.txt';
fs.writeFileSync(pathToFile, text, { encoding: 'utf8', flag: 'a' });

//write file from array
const pathToFile2 = 'd02/n_2.txt';
let text2 = [
  '- Где мы? - что то на неполнятном языке.',
  '- На Земле! - лязгая зубами, ответил он.',
  '- Но тут кажется конец света! Мертвые встают из под земли!'
];
text2 = text2.join('\r\n');
fs.writeFileSync(pathToFile2, text2, { encoding: 'utf8', flag: 'w' });

