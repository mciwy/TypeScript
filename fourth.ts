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
