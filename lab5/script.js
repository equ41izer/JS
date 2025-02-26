//Задание 1

function countEqualToPrevious(arr) {
    if (!Array.isArray(arr) || arr.length < 2) return 0; // Проверка на корректность входных данных

    let count = 0;
   
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        }
    }
   
    return count;
}

// Примеры использования
console.log(countEqualToPrevious([1.2, 1.2, 3.5, 4.4, 4.4, 4.4, 5.6]));
console.log(countEqualToPrevious([0.5, 0.5, 0.5, 0.5]));
console.log(countEqualToPrevious([1.1, 2.2, 3.3, 4.4]));
console.log(countEqualToPrevious([]));
console.log(countEqualToPrevious([7.7])); 

//Задание 2

function sumNegativeColumns(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new Error("Некорректная матрица");
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = new Array(cols).fill(0); // Создаём массив для хранения сумм

    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            if (matrix[row][col] < 0) {
                result[col] += matrix[row][col]; // Если элемент отрицательный, добавляем к сумме столбца
            }
        }
    }

    return result;
}

// Примеры использования
const matrix1 = [
    [-1.5,  2.3, -3.1],
    [ 4.2, -5.6, -6.7],
    [-7.8,  8.9,  9.1]
];

const matrix2 = [
    [ 1.1, -2.2,  3.3],
    [-4.4, -5.5, -6.6],
    [ 7.7,  8.8, -9.9]
];

console.log(sumNegativeColumns(matrix1)); // [-9.3, -5.6, -9.8]
console.log(sumNegativeColumns(matrix2)); // [-4.4, -7.7, -16.5]
console.log(sumNegativeColumns([[1.1, 2.2], [3.3, 4.4]])); // [0, 0] (нет отрицательных чисел)
console.log(sumNegativeColumns([[-1.1, -2.2], [-3.3, -4.4]])); // [-4.4, -6.6]