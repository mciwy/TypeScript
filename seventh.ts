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
