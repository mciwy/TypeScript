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
