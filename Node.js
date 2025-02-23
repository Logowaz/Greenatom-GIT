// Импортируем модуль http
const http = require('http');

// Создаем сервер
const server = http.createServer((req, res) => {
  // Устанавливаем заголовок ответа
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Отправляем HTML-ответ
  res.end('<h1>Привет, мир!</h1>');
});

// Указываем порт, на котором сервер будет слушать запросы
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});