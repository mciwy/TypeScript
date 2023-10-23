// Функция чтения с клавиатуры
function readFromKeyboard(): string {
  return "Прочитано с клавиатуры";
}

// Функция чтения из файла
function readFromFile(): string {
  return "Прочитано из файла";
}

// Функция чтения из сети
function readFromNetwork(): string {
  return "Прочитано из сети";
}

// Функция вывода в терминал
function printToTerminal(message: string): void {
  console.log(`Напечатали в терминал: ${message}`);
}

// Функция записи в файл
function writeToFile(message: string): void {
  console.log(`Записано в файл: ${message}`);
}

// Функция отправки данных по сети
function sendOverNetwork(message: string): void {
  console.log(`Отправлено по сети: ${message}`);
}

// Основная функция main
function main(from: string, to: string): void {
  let message = "";

  if (from === "keyboard") {
    message = readFromKeyboard();
  } else if (from === "file") {
    message = readFromFile();
  } else if (from === "network") {
    message = readFromNetwork();
  }

  if (to === "terminal") {
    printToTerminal(message);
  } else if (to === "file") {
    writeToFile(message);
  } else if (to === "network") {
    sendOverNetwork(message);
  }
}

// Примеры использования:

// Чтение с клавиатуры и вывод в терминал
main("keyboard", "terminal");

// Чтение из файла и вывод в терминал
main("file", "terminal");

// Чтение с клавиатуры и отправка данных по сети
main("keyboard", "network");

// Чтение из файла и отправка данных по сети
main("file", "network");

// Чтение с клавиатуры и запись в файл
main("keyboard", "file");

// Получение данных из сети и вывод в терминал
main("network", "terminal");

// Получение данных из сети и запись в файл
main("network", "file");
