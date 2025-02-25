// Класс Figure
class Figure {
    #x; // Приватное свойство x
    #y; // Приватное свойство y

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    // Метод для получения координат центра фигуры
    getCenter() {
        return { x: this.#x, y: this.#y };
    }

    // Метод для вычисления площади (должен быть переопределён в наследниках)
    square() {
        return undefined;
    }
}

// Класс Circle (Круг), наследник Figure
class Circle extends Figure {
    #r; // Радиус

    constructor(x, y, r) {
        super(x, y); // Вызываем конструктор родителя
        this.#r = r;
    }

    // Переопределяем метод вычисления площади круга
    square() {
        return Math.PI * this.#r ** 2;
    }

    // Метод для получения радиуса
    getRadius() {
        return this.#r;
    }
}

// Класс Rectangle (Прямоугольник), наследник Figure
class Rectangle extends Figure {
    #h; // Высота
    #w; // Ширина

    constructor(x, y, h, w) {
        super(x, y); // Вызываем конструктор родителя
        this.#h = h;
        this.#w = w;
    }

    // Переопределяем метод вычисления площади прямоугольника
    square() {
        return this.#h * this.#w;
    }

    // Метод для получения размеров
    getDimensions() {
        return { height: this.#h, width: this.#w };
    }
}

// Демонстрация работы с экземплярами

// Создаём круг с центром (5,5) и радиусом 10
const circle = new Circle(5, 5, 10);
console.log("Круг:");
console.log("  Центр:", circle.getCenter());
console.log("  Радиус:", circle.getRadius());
console.log("  Площадь:", circle.square().toFixed(2));

// Создаём прямоугольник с центром (10,15), высотой 5 и шириной 8
const rectangle = new Rectangle(10, 15, 5, 8);
console.log("\nПрямоугольник:");
console.log("  Центр:", rectangle.getCenter());
console.log("  Размеры:", rectangle.getDimensions());
console.log("  Площадь:", rectangle.square());