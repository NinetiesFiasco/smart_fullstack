// Переменные среды
require("dotenv").config();

const express = require('express');
const app = express();

const PORT = process.env.SERVER_PORT || 5000;

const path = require('path');
// Понимаем JSON тело запроса 
const bodyParser = require('body-parser');
// Читаем куки 
const cookieParser = require('cookie-parser');

// Добавляем middleWare к серверу
app.use(cookieParser());
app.use(bodyParser.json());

// Конечные точки
app.use('/api/tst', require('./api/tst/router.js'));

// Статичные файлы сборки
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.use(express.static(__dirname+'/build'));
  app.get('*', (req, res) => {
    res.sendFile('build/index.html', { root: __dirname })
  });
}

// Запуск сервера
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
  console.log(`Environment: ${process.env.NODE_ENV}`)
});