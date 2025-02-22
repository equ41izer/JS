//Лабораторная работа №2

//Задание 1

const number = function maxNubmer(a,b,c) {
    if (a>=b && c>=b) {
    return a * c;
    } else if (a>=c && b>=c) {
        return a * b;
    } else {
        return b * c;
    }
}
console.log (number(1,5,2));


//Задание 2

function greet(name, rank = "рядовой") {
    console.log('Здравствуйте, ', name);
    console.log('Товарищь, ', rank);
}

greet('Вася')


//Задание 3

function first(func, ...args) {
    return func(...args);
};

function vic(x, y) {
    return x + y;
};

let result = first(vic, 6, 2);
console.log('Сумма аргементов равна ', result);



//Задание 5
function factor(n) {
    if (n <= 0) {
        alert('Введите положительное число!');
    }
    for (let i = 1; i <= n; i++) {
        let num = n
        num = i * num; 
        console.log(num);
    }
}
factor(3)