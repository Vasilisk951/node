// подключаем модули для работы с файловой системой
const fs = require('fs');
const path = require('path');

// существует ли папка
function f01() {
  const pathToDir = './test';
  if (fs.existsSync(pathToDir)) { //проверяем наличие файла или каталога по указанному пути
    console.log('yes');
  } else {
    console.log('no');
  }
}
//f01()

//проверка существования файла
function f02() {
  const pathToFile = './test/potter.doc';
  if (fs.existsSync(pathToFile)) { //проверяем наличие файла или каталога по указанному пути
    console.log('yes');
  } else {
    console.log('no');
  }
}
//f02();

//вычисление размера файлов
function f03() {
  const pathToFile = './test/ex_mp3.mp3';
  const fileInfo = fs.statSync(pathToFile);
  console.log(fileInfo.size);
}
//f03();

//имя и расширение файла
function f04() {
  const pathToFile = './test/ex_mp3.mp3';
  console.log(path.basename(pathToFile));
  console.log(path.dirname(pathToFile));
  console.log(path.extname(pathToFile));
  console.log(path.parse(pathToFile));
}
//f04();

//получаем файлы и папки в директории
function f05() {
  const pathToDir = './test';
  const allFiles = fs.readdirSync(pathToDir);
  console.log(allFiles);
  let out = '';
  allFiles.forEach(item => out += item + '\n');
  console.log(out);
}
//f05();

//получить абсолютный путь
const directoryPath = path.join(__dirname, 'test');
console.log(directoryPath);
console.log(__dirname);
console.log(__filename);