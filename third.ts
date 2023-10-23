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
