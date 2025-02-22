// Функция для проверки, является ли число числом Армстронга
function isArmstrongNumber(num) {
    const digits = num.toString().split(''); // Разделяем число на отдельные цифры
    const power = digits.length; // Определяем количество цифр
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === num;
}

// Функция для нахождения всех чисел Армстронга в заданном диапазоне
function findArmstrongNumbers(a, b) {
    const armstrongNumbers = [];
    for (let i = a; i <= b; i++) {
        if (isArmstrongNumber(i)) {
            armstrongNumbers.push(i);
        }
    }
    return armstrongNumbers;
}

// Запрос ввода от пользователя
const a = parseInt(prompt("Введите начало диапазона (a):"), 10);
const b = parseInt(prompt("Введите конец диапазона (b):"), 10);

// Проверяем введённые значения
if (isNaN(a) || isNaN(b) || a > b) {
    console.error("Введите корректный диапазон!");
} else {
    const result = findArmstrongNumbers(a, b);
    console.log(`Числа Армстронга в диапазоне [${a}, ${b}]:`, result.length ? result : "Отсутствуют");
}