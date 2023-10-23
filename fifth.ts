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
