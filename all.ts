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

class Point3D {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

// Создаем три объекта Point3D с разными координатами
const point1: Point3D = new Point3D(1, 2, 3);
const point2: Point3D = new Point3D(4, 5, 6);
const point3: Point3D = new Point3D(7, 8, 9);

// Выводим координаты каждого объекта в консоль
console.log("Координаты point1: x = " + point1.x + ", y = " + point1.y + ", z = " + point1.z);
console.log("Координаты point2: x = " + point2.x + ", y = " + point2.y + ", z = " + point2.z);
console.log("Координаты point3: x = " + point3.x + ", y = " + point3.y + ", z = " + point3.z);

class Line {
  constructor(public start: { x: number, y: number }, public end: { x: number, y: number }) {}
}

// Создаем два объекта Line
const line1 = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });
const line2 = new Line({ x: 2, y: 3 }, { x: 8, y: 10 });

// Выводим информацию о линиях в консоль
console.log('Линия 1:');
console.log('Начало:', line1.start);
console.log('Конец:', line1.end);

console.log('Линия 2:');
console.log('Начало:', line2.start);
console.log('Конец:', line2.end);

class Rect {
  constructor(
    public topLeftX: number = 0,
    public topLeftY: number = 0,
    public width: number = 0,
    public height: number = 0
  ) {}
}

// Создаем экземпляр с параметрами
const rect1 = new Rect(10, 20, 30, 40);

// Создаем экземпляр без параметров (все значения будут по умолчанию 0)
const rect2 = new Rect();

// Создаем еще один экземпляр с другими параметрами
const rect3 = new Rect(5, 5, 50, 60);

// Выводим информацию о каждом экземпляре в консоль
console.log('Прямоугольник 1:');
console.log('Верхний левый угол:', `(${rect1.topLeftX}, ${rect1.topLeftY})`);
console.log('Ширина:', rect1.width);
console.log('Высота:', rect1.height);

console.log('Прямоугольник 2:');
console.log('Верхний левый угол:', `(${rect2.topLeftX}, ${rect2.topLeftY})`);
console.log('Ширина:', rect2.width);
console.log('Высота:', rect2.height);

console.log('Прямоугольник 3:');
console.log('Верхний левый угол:', `(${rect3.topLeftX}, ${rect3.topLeftY})`);
console.log('Ширина:', rect3.width);
console.log('Высота:', rect3.height);

class Point {
  constructor(public x: number, public y: number) {}
}

class Triangle {
  constructor(
    public vertex1: Point = new Point(0, 0),
    public vertex2: Point = new Point(0, 0),
    public vertex3: Point = new Point(0, 0)
  ) {}
}

// Создаем два объекта Triangle с разными координатами вершин
const triangle1 = new Triangle(new Point(1, 2), new Point(3, 4), new Point(5, 6));
const triangle2 = new Triangle(new Point(0, 0), new Point(2, 2), new Point(4, 0));

// Выводим координаты вершин каждого треугольника в консоль
console.log('Треугольник 1:');
console.log('Вершина 1:', `(${triangle1.vertex1.x}, ${triangle1.vertex1.y})`);
console.log('Вершина 2:', `(${triangle1.vertex2.x}, ${triangle1.vertex2.y})`);
console.log('Вершина 3:', `(${triangle1.vertex3.x}, ${triangle1.vertex3.y})`);

console.log('Треугольник 2:');
console.log('Вершина 1:', `(${triangle2.vertex1.x}, ${triangle2.vertex1.y})`);
console.log('Вершина 2:', `(${triangle2.vertex2.x}, ${triangle2.vertex2.y})`);
console.log('Вершина 3:', `(${triangle2.vertex3.x}, ${triangle2.vertex3.y})`);

class Line {
  constructor(public start: { x: number, y: number }, public end: { x: number, y: number }) {}
}

// Функция для проверки пересечения двух линий
function linesIntersect(line1: Line, line2: Line): boolean {
  const { x: x1, y: y1 } = line1.start;
  const { x: x2, y: y2 } = line1.end;
  const { x: x3, y: y3 } = line2.start;
  const { x: x4, y: y4 } = line2.end;

  // Проверяем условия пересечения
  const det = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (det === 0) {
    // Линии параллельны
    return false;
  } else {
    const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / det;
    const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / det;
    return t >= 0 && t <= 1 && u >= 0 && u <= 1;
  }
}

// Создаем два объекта Line
const line1 = new Line({ x: 1, y: 1 }, { x: 5, y: 5 });
const line2 = new Line({ x: 3, y: 3 }, { x: 7, y: 7 });

// Проверяем, пересекаются ли линии
const doLinesIntersect = linesIntersect(line1, line2);

console.log('Линия 1:', `(${line1.start.x}, ${line1.start.y}) - (${line1.end.x}, ${line1.end.y})`);
console.log('Линия 2:', `(${line2.start.x}, ${line2.start.y}) - (${line2.end.x}, ${line2.end.y})`);

if (doLinesIntersect) {
  console.log('Линии пересекаются.');
} else {
  console.log('Линии не пересекаются.');
}

class Person {
  private fullName: string;
  private age: number;
  private weight: number;
  private category: number;

  constructor(fullName: string, age: number, weight: number, category: number) {
    this.setFullName(fullName);
    this.setAge(age);
    this.setWeight(weight);
    this.setCategory(category);
  }

  // Геттеры и сеттеры для полей класса
  public getFullName(): string {
    return this.fullName;
  }

  public setFullName(fullName: string): void {
    // Проверяем, что Ф.И.О. содержит только буквы, пробел и дефис
    if (/^[A-Za-z\s\-]+$/.test(fullName)) {
      this.fullName = fullName;
    } else {
      console.log('Некорректное значение для Ф.И.О.');
    }
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    // Проверяем, что возраст положительный и в разумных пределах
    if (age >= 0 && age <= 150) {
      this.age = age;
    } else {
      console.log('Некорректное значение для возраста.');
    }
  }

  public getWeight(): number {
    return this.weight;
  }

  public setWeight(weight: number): void {
    // Проверяем, что вес положительный и в разумных пределах
    if (weight >= 0 && weight <= 500) {
      this.weight = weight;
    } else {
      console.log('Некорректное значение для веса.');
    }
  }

  public getCategory(): number {
    return this.category;
  }

  public setCategory(category: number): void {
    // Проверяем, что разряд находится в диапазоне [1, 5]
    if (category >= 1 && category <= 5) {
      this.category = category;
    } else {
      console.log('Некорректное значение для разряда.');
    }
  }
}

// Создаем несколько объектов Person и проверяем их корректную работу
const person1 = new Person('Иванов Иван Иванович', 30, 75, 3);
const person2 = new Person('Петров Петр Петрович', 25, 80, 2);
const person3 = new Person('Сидоров Сидор Сидорович', 40, 90, 4);

// Выводим информацию о каждом сотруднике
console.log('Сотрудник 1:');
console.log('Ф.И.О.:', person1.getFullName());
console.log('Возраст:', person1.getAge());
console.log('Вес:', person1.getWeight());
console.log('Разряд:', person1.getCategory());

console.log('Сотрудник 2:');
console.log('Ф.И.О.:', person2.getFullName());
console.log('Возраст:', person2.getAge());
console.log('Вес:', person2.getWeight());
console.log('Разряд:', person2.getCategory());

console.log('Сотрудник 3:');
console.log('Ф.И.О.:', person3.getFullName());
console.log('Возраст:', person3.getAge());
console.log('Вес:', person3.getWeight());
console.log('Разряд:', person3.getCategory());

// Общий класс для мебели
class Furniture {
  constructor(public name: string, public dimensions: { width: number, height: number, depth: number }, public price: number) {}
}

// Класс для стула
class Chair extends Furniture {
  constructor(
    name: string,
    dimensions: { width: number, height: number, depth: number },
    price: number,
    public legCount: number,
    public legHeight: number,
    public hasBackrest: boolean
  ) {
    super(name, dimensions, price);
  }
}

// Класс для шкафа
class Cabinet extends Furniture {
  constructor(
    name: string,
    dimensions: { width: number, height: number, depth: number },
    price: number,
    public handleMaterial: string,
    public doorCount: number,
    public drawerCount: number
  ) {
    super(name, dimensions, price);
  }
}

// Класс для полки
class Shelf extends Furniture {
  constructor(
    name: string,
    dimensions: { width: number, height: number, depth: number },
    price: number,
    public segmentCount: number,
    public segmentSize: { width: number, height: number, depth: number }
  ) {
    super(name, dimensions, price);
  }
}

// Класс для стола
class Table extends Furniture {
  constructor(
    name: string,
    dimensions: { width: number, height: number, depth: number },
    price: number,
    public legCount: number,
    public tabletopArea: number
  ) {
    super(name, dimensions, price);
  }
}

// Создаем объекты мебели
const chair = new Chair('Стул', { width: 40, height: 80, depth: 40 }, 50, 4, 30, true);
const cabinet = new Cabinet('Шкаф', { width: 120, height: 200, depth: 60 }, 300, 'дерево', 4, 2);
const shelf = new Shelf('Полка', { width: 80, height: 40, depth: 20 }, 40, 5, { width: 70, height: 10, depth: 15 });
const table = new Table('Стол', { width: 120, height: 75, depth: 80 }, 150, 4, 0.6);

// Выводим информацию о каждом объекте мебели
console.log('Стул:', chair);
console.log('Шкаф:', cabinet);
console.log('Полка:', shelf);
console.log('Стол:', table);

// Общий класс для окна приложения
class AppWindow {
  constructor(public title: string, public font: string, public hasBorder: boolean) {}
}

// Класс для окна на смартфоне
class SmartphoneWindow extends AppWindow {}

// Класс для окна на планшете
class TabletWindow extends AppWindow {
  constructor(title: string, font: string, hasBorder: boolean, public position: { x: number, y: number }, public size: { width: number, height: number }) {
    super(title, font, hasBorder);
  }
}

// Класс для окна на десктопе
class DesktopWindow extends AppWindow {
  constructor(title: string, font: string, hasBorder: boolean, public position: { x: number, y: number }, public size: { width: number, height: number }, public resizable: boolean, public fullscreen: boolean) {
    super(title, font, hasBorder);
  }
}

// Создаем экземпляры окон для разных устройств
const smartphoneApp = new SmartphoneWindow('Мое приложение для смартфона', 'Arial', false);
const tabletApp = new TabletWindow('Планшетное приложение', 'Verdana', true, { x: 50, y: 50 }, { width: 800, height: 600 });
const desktopApp = new DesktopWindow('Приложение для десктопа', 'Times New Roman', true, { x: 100, y: 100 }, { width: 1280, height: 720 }, true, true);

// Выводим информацию о каждом окне в консоль
console.log('Окно на смартфоне:', smartphoneApp);
console.log('Окно на планшете:', tabletApp);
console.log('Окно на десктопе:', desktopApp);


class Stationery {
  constructor(public price: number, public stock: number, public identifier: string) {}

  // Конструктор без аргументов
  constructor() {
    this.price = 0;
    this.stock = 0;
    this.identifier = '';
  }
}

class Pen extends Stationery {
  constructor(price: number, stock: number, identifier: string, public inkColor: string) {
    super(price, stock, identifier);
  }

  displayPen() {
    console.log('Ручка:');
    console.log('Цена:', this.price);
    console.log('Наличие на складе:', this.stock);
    console.log('Идентификатор:', this.identifier);
    console.log('Цвет чернил:', this.inkColor);
  }
}

class Pencil extends Stationery {
  constructor(price: number, stock: number, identifier: string, public hardness: string) {
    super(price, stock, identifier);
  }

  displayPencil() {
    console.log('Карандаш:');
    console.log('Цена:', this.price);
    console.log('Наличие на складе:', this.stock);
    console.log('Идентификатор:', this.identifier);
    console.log('Твердость:', this.hardness);
  }
}

class Notebook extends Stationery {
  constructor(price: number, stock: number, identifier: string, public pageCount: number) {
    super(price, stock, identifier);
  }

  displayNotebook() {
    console.log('Тетрадь:');
    console.log('Цена:', this.price);
    console.log('Наличие на складе:', this.stock);
    console.log('Идентификатор:', this.identifier);
    console.log('Количество страниц:', this.pageCount);
  }
}

// Создаем объекты дочерних классов и выводим информацию в консоль
const bluePen = new Pen(2.5, 100, 'P001', 'синий');
const yellowPencil = new Pencil(1.0, 50, 'P002', 'HB');
const mathNotebook = new Notebook(3.0, 80, 'N001', 100);

bluePen.displayPen();
yellowPencil.displayPencil();
mathNotebook.displayNotebook();

class Graph {
  constructor(public values: number[], public name: string) {}

  // Метод для отображения графика
  draw(): void {
    console.log(`Рисуется график: ${this.name}`);
  }
}

class LineGraph extends Graph {
  constructor(values: number[], name: string) {
    super(values, name);
  }

  // Перегрузка метода draw() для линейного графика
  draw(): void {
    console.log(`Рисуется линейный график: ${this.name}`);
  }
}

class Chart extends Graph {
  constructor(values: number[], name: string) {
    super(values, name);
  }

  // Перегрузка метода draw() для круговой диаграммы
  draw(): void {
    console.log(`Рисуется круговая диаграмма: ${this.name}`);
  }
}

class Bar extends Graph {
  constructor(values: number[], name: string) {
    super(values, name);
  }

  // Перегрузка метода draw() для столбикового графика
  draw(): void {
    console.log(`Рисуется столбиковый график: ${this.name}`);
  }
}

// Создаем экземпляры дочерних классов
const lineGraph = new LineGraph([1, 2, 3, 4, 5], 'Продажи');
const chart = new Chart([10, 20, 30, 40, 50], 'Доли продуктов');
const bar = new Bar([5, 8, 3, 12, 7], 'Прибыль');

// Вызываем метод draw() через ссылки на объекты базового класса Graph
const graphs: Graph[] = [lineGraph, chart, bar];
graphs.forEach((graph) => {
  graph.draw();
});

class Nota {
  private _identifier: string;
  private _name: string;
  private _duration: string;
  private _hasSharp: boolean;
  private _hasFlat: boolean;

  constructor(identifier: string, name: string, duration: string, hasSharp: boolean, hasFlat: boolean) {
    this._identifier = identifier;
    this._name = name;
    this._duration = duration;
    this._hasSharp = hasSharp;
    this._hasFlat = hasFlat;
  }

  get identifier(): string {
    return this._identifier;
  }

  set identifier(value: string) {
    this._identifier = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get duration(): string {
    return this._duration;
  }

  set duration(value: string) {
    this._duration = value;
  }

  get hasSharp(): boolean {
    return this._hasSharp;
  }

  set hasSharp(value: boolean) {
    this._hasSharp = value;
  }

  get hasFlat(): boolean {
    return this._hasFlat;
  }

  set hasFlat(value: boolean) {
    this._hasFlat = value;
  }
}

class Do extends Nota {
  constructor() {
    super('C', 'До', 'Четверть', false, false);
  }
}

class Re extends Nota {
  constructor() {
    super('D', 'Ре', 'Четверть', false, false);
  }
}

class Mi extends Nota {
  constructor() {
    super('E', 'Ми', 'Четверть', false, false);
  }
}

class Fa extends Nota {
  constructor() {
    super('F', 'Фа', 'Четверть', false, false);
  }
}

class Sol extends Nota {
  constructor() {
    super('G', 'Соль', 'Четверть', false, false);
  }
}

class La extends Nota {
  constructor() {
    super('A', 'Ля', 'Четверть', false, false);
  }
}

class Si extends Nota {
  constructor() {
    super('B', 'Си', 'Четверть', false, false);
  }
}

// Создаем экземпляры музыкальных нот и выводим информацию в консоль
const doNota = new Do();
const reNota = new Re();
const miNota = new Mi();
const faNota = new Fa();
const solNota = new Sol();
const laNota = new La();
const siNota = new Si();

console.log('До:', doNota.identifier, doNota.name, doNota.duration, doNota.hasSharp, doNota.hasFlat);
console.log('Ре:', reNota.identifier, reNota.name, reNota.duration, reNota.hasSharp, reNota.hasFlat);
console.log('Ми:', miNota.identifier, miNota.name, miNota.duration, miNota.hasSharp, miNota.hasFlat);
console.log('Фа:', faNota.identifier, faNota.name, faNota.duration, faNota.hasSharp, faNota.hasFlat);
console.log('Соль:', solNota.identifier, solNota.name, solNota.duration, solNota.hasSharp, solNota.hasFlat);
console.log('Ля:', laNota.identifier, laNota.name, laNota.duration, laNota.hasSharp, laNota.hasFlat);
console.log('Си:', siNota.identifier, siNota.name, siNota.duration, siNota.hasSharp, siNota.hasFlat);

class User {
  private _name: string;
  private _login: string;
  private _password: string;

  constructor(name: string, login: string, password: string) {
    this._name = name;
    this._login = login;
    this._password = password;
    User.count++;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get login(): string {
    return this._login;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  showInfo(): void {
    console.log(`Name: ${this._name}, Login: ${this._login}`);
  }

  static count: number = 0;
}

class SuperUser extends User {
  private _role: string;

  constructor(name: string, login: string, password: string, role: string) {
    super(name, login, password);
    this._role = role;
    SuperUser.count++;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  showInfo(): void {
    console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this._role}`);
  }

  static count: number = 0;
}

const user1 = new User('Paul McCartney', 'paul', '1234');
const user2 = new User('George Harrison', 'george', '5678');
const user3 = new User('Richard Starkey', 'ringo', '8523');
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin');

user1.showInfo();
admin.showInfo();

const users = User.count;
const admins = SuperUser.count;

console.log(`Всего обычных пользователей: ${users}`);
console.log(`Всего супер-пользователей: ${admins}`);

user3.name = 'Ringo Starr';
user1.password = 'Pa$$w0rd';

console.log(user3.name);
console.log(user2.password);
console.log(user2.login); // login доступен только для чтения

try {
  user2.login = 'geo'; // Ошибка: нельзя изменять логин
} catch (error) {
  console.log(`Ошибка: ${error.message}`);
}

// Абстрактный класс Geometry
abstract class Geometry {
  width: number;
  color: string;

  constructor(width: number, color: string) {
    this.width = width;
    this.color = color;
  }

  // Абстрактный метод draw, который должен быть реализован в дочерних классах
  abstract draw(): void;
}

// Дочерний класс Line для представления линий
class Line extends Geometry {
  x1: number;
  y1: number;
  x2: number;
  y2: number;

  constructor(width: number, color: string, x1: number, y1: number, x2: number, y2: number) {
    super(width, color);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  draw(): void {
    console.log(`Рисуем линию: (${this.x1},${this.y1}) - (${this.x2},${this.y2})`);
  }
}

// Дочерний класс Rect для представления прямоугольников
class Rect extends Geometry {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(width: number, color: string, x: number, y: number, width: number, height: number) {
    super(width, color);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(): void {
    console.log(`Рисуем прямоугольник: (${this.x},${this.y}), ширина: ${this.width}, высота: ${this.height}`);
  }
}

// Дочерний класс Ellipse для представления эллипсов
class Ellipse extends Geometry {
  cx: number;
  cy: number;
  rx: number;
  ry: number;

  constructor(width: number, color: string, cx: number, cy: number, rx: number, ry: number) {
    super(width, color);
    this.cx = cx;
    this.cy = cy;
    this.rx = rx;
    this.ry = ry;
  }

  draw(): void {
    console.log(`Рисуем эллипс: Центр (${this.cx},${this.cy}), радиус x: ${this.rx}, радиус y: ${this.ry}`);
  }
}

// Создаем объекты дочерних классов и вызываем метод draw()
const line = new Line(2, 'blue', 10, 10, 50, 50);
const rect = new Rect(3, 'red', 30, 30, 100, 60);
const ellipse = new Ellipse(2, 'green', 60, 60, 40, 30);

line.draw();
rect.draw();
ellipse.draw();

// Абстрактный класс Recipes
abstract class Recipes {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  abstract showIngredients(): void;
  abstract showRecipe(): void;
}

// Дочерний класс Salad (для салатов)
class Salad extends Recipes {
  ingredients: string;
  recipe: string;

  constructor(name: string, type: string, ingredients: string, recipe: string) {
    super(name, type);
    this.ingredients = ingredients;
    this.recipe = recipe;
  }

  showIngredients(): void {
    console.log(`Ингредиенты для ${this.name}: ${this.ingredients}`);
  }

  showRecipe(): void {
    console.log(`Рецепт приготовления ${this.name}: ${this.recipe}`);
  }
}

// Дочерний класс Pizza (для пицц)
class Pizza extends Recipes {
  ingredients: string;
  recipe: string;

  constructor(name: string, type: string, ingredients: string, recipe: string) {
    super(name, type);
    this.ingredients = ingredients;
    this.recipe = recipe;
  }

  showIngredients(): void {
    console.log(`Ингредиенты для ${this.name}: ${this.ingredients}`);
  }

  showRecipe(): void {
    console.log(`Рецепт приготовления ${this.name}: ${this.recipe}`);
  }
}

// Дочерний класс Porridge (для каш)
class Porridge extends Recipes {
  ingredients: string;
  recipe: string;

  constructor(name: string, type: string, ingredients: string, recipe: string) {
    super(name, type);
    this.ingredients = ingredients;
    this.recipe = recipe;
  }

  showIngredients(): void {
    console.log(`Ингредиенты для ${this.name}: ${this.ingredients}`);
  }

  showRecipe(): void {
    console.log(`Рецепт приготовления ${this.name}: ${this.recipe}`);
  }
}

// Создаем объекты дочерних классов и вызываем методы через интерфейс Recipes
const salad = new Salad('Греческий салат', 'вегетарианский', 'Помидоры, огурцы, оливки, сыр фета', '1. Нарежьте овощи. 2. Добавьте сыр и оливки. 3. Полейте оливковым маслом.');
const pizza = new Pizza('Маргарита', 'обычная', 'Тесто, томатный соус, сыр моцарелла', '1. Раскатайте тесто. 2. Намазать соус. 3. Посыпать сыром.');
const porridge = new Porridge('Овсянка', 'вегетарианская', 'Овсянка, молоко, мед', '1. Сварите овсянку. 2. Подавайте с медом.');

function printRecipeInfo(recipe: Recipes) {
  console.log(`Рецепт: ${recipe.name}`);
  console.log(`Тип: ${recipe.type}`);
  recipe.showIngredients();
  recipe.showRecipe();
}

printRecipeInfo(salad);
printRecipeInfo(pizza);
printRecipeInfo(porridge);

interface PersonInterface {
  getInfo(): string;
  getStatus(): string;
  getFIO(): string;
}

// Базовый класс Persons для хранения общих полей
class Persons {
  name: string;
  birthYear: number;
  address: string;

  constructor(name: string, birthYear: number, address: string) {
    this.name = name;
    this.birthYear = birthYear;
    this.address = address;
  }
}

class Supervisers extends Persons implements PersonInterface {
  static count: number = 0; // Для подсчета числа сотрудников класса Supervisers
  position: string;
  department: string;
  phone: string;

  constructor(name: string, birthYear: number, address: string, position: string, department: string, phone: string) {
    super(name, birthYear, address);
    this.position = position;
    this.department = department;
    this.phone = phone;
    Supervisers.count++;
  }

  getInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}, Department: ${this.department}`;
  }

  getStatus(): string {
    return `Position: ${this.position}`;
  }

  getFIO(): string {
    return `Full Name: ${this.name}`;
  }
}

class Jobs extends Persons implements PersonInterface {
  static count: number = 0; // Для подсчета числа сотрудников класса Jobs
  position: string;
  department: string;
  phone: string;

  constructor(name: string, birthYear: number, address: string, position: string, department: string, phone: string) {
    super(name, birthYear, address);
    this.position = position;
    this.department = department;
    this.phone = phone;
    Jobs.count++;
  }

  getInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}, Department: ${this.department}`;
  }

  getStatus(): string {
    return `Position: ${this.position}`;
  }

  getFIO(): string {
    return `Full Name: ${this.name}`;
  }
}

class Clients extends Persons implements PersonInterface {
  static count_clients: number = 0; // Для подсчета числа клиентов класса Clients
  phone: string;

  constructor(name: string, birthYear: number, address: string, phone: string) {
    super(name, birthYear, address);
    this.phone = phone;
    Clients.count_clients++;
  }

  getInfo(): string {
    return `Name: ${this.name}, Phone: ${this.phone}, Address: ${this.address}`;
  }

  getStatus(): string {
    return `Client`;
  }

  getFIO(): string {
    return `Full Name: ${this.name}`;
  }
}

const supervisor = new Supervisers('John Doe', 1980, '123 Main St', 'Manager', 'Sales', '555-123-4567');
const job = new Jobs('Bob Johnson', 1990, '789 Oak St', 'Engineer', 'Engineering', '555-222-3333');
const client = new Clients('Client A', 1985, '789 Maple St', '555-111-2222');

function printPersonInfo(person: PersonInterface) {
  console.log(person.getInfo());
  console.log(person.getStatus());
  console.log(person.getFIO());
  console.log();
}

printPersonInfo(supervisor);
printPersonInfo(job);
printPersonInfo(client);

console.log(`Всего сотрудников: ${Supervisers.count + Jobs.count}`);
console.log(`Всего клиентов: ${Clients.count_clients}`);

interface Logger {
    log(message: string): void;
}

class LogToConsole implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

type Point = number;
type Distance = number;
type Angle = number;
type Position = { x: Point; y: Point };
enum CarriageState {
    UP,
    DOWN
}
enum LineColor {
    BLACK = "черный",
    RED = "красный",
    GREEN = "зелёный"
}

class Plotter {
    private state: {
        position: Position;
        angle: Angle;
        color: LineColor;
        carriageState: CarriageState;
    };
    private logger: Logger;

    constructor(logger: Logger) {
        this.logger = logger;
        this.state = {
            position: { x: 0, y: 0 },
            angle: 0,
            color: LineColor.BLACK,
            carriageState: CarriageState.UP
        };
    }

    move(distance: Distance): void {
        let newPosition = this.calcNewPosition(distance);
        if (this.state.carriageState === CarriageState.DOWN) {
            this.drawLine(this.state.position, newPosition);
        } else {
            this.logger.log(`Передвигаем на ${distance} от точки (${this.state.position.x}, ${this.state.position.y})`);
        }
        this.state.position = newPosition;
    }

    turn(angle: Angle): void {
        this.logger.log(`Поворачиваем на ${angle} градусов`);
        this.state.angle = (this.state.angle + angle) % 360.0;
    }

    carriageUp(): void {
        this.logger.log("Поднимаем каретку");
        this.state.carriageState = CarriageState.UP;
    }

    carriageDown(): void {
        this.logger.log("Опускаем каретку");
        this.state.carriageState = CarriageState.DOWN;
    }

    setColor(color: LineColor): void {
        this.logger.log(`Устанавливаем ${color} цвет линии.`);
        this.state.color = color;
    }

    setPosition(position: Position): void {
        this.logger.log(`Устанавливаем позицию каретки в (${position.x}, ${position.y}).`);
        this.state.position = position;
    }

    private drawLine(from: Position, to: Position): void {
        this.logger.log(`...Чертим линию из (${from.x}, ${from.y}) в (${to.x}, ${to.y}) используя ${this.state.color} цвет.`);
    }

    private calcNewPosition(distance: Distance): Position {
        const angle_in_rads = this.state.angle * (Math.PI / 180.0) * 1.0;
        const x = this.state.position.x + distance * Math.cos(angle_in_rads);
        const y = this.state.position.y + distance * Math.sin(angle_in_rads);
        return { x: Math.round(x), y: Math.round(y) };
    }
}

function drawTriangle(plt: Plotter, size: Distance): void {
    plt.setColor(LineColor.GREEN);
    for (let i = 0; i < 3; ++i) {
        plt.carriageDown();
        plt.move(size);
        plt.carriageUp();
        plt.turn(120.0);
    }
}

const plotter = new Plotter(new LogToConsole());
drawTriangle(plotter, 100.0);
