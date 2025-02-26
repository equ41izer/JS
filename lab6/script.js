//Задание 1

function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [...set1].filter(item => set2.has(item));
}

// Примеры использования
console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(findCommonElements([10, 20, 30], [15, 25, 35])); // []
console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
console.log(findCommonElements([], [1, 2, 3])); // []
console.log(findCommonElements([true, false], [false, false, true])); // [true, false]


//Задание 2

function countOccurrences(arr) {
    const countMap = new Map();

    for (const item of arr) {
        countMap.set(item, (countMap.get(item) || 0) + 1);
    }

    return countMap;
}

// Примеры использования
console.log(countOccurrences([1, 2, 2, 3, 3, 3]));
// Map(3) { 1 => 1, 2 => 2, 3 => 3 }

console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "banana"]));
// Map(3) { 'apple' => 2, 'banana' => 3, 'orange' => 1 }

console.log(countOccurrences([true, false, true, true, false]));
// Map(2) { true => 3, false => 2 }

console.log(countOccurrences([]));
// Map(0) {}

console.log(countOccurrences(["a", "b", "a", "A", "b", "B"]));
// Map(4) { 'a' => 2, 'b' => 2, 'A' => 1, 'B' => 1 }


//Задание 3

class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
}

function countLargestGroup(students) {
    const groupCount = new Map();

    // Подсчитываем количество студентов в каждой группе
    for (const student of students) {
        groupCount.set(student.group, (groupCount.get(student.group) || 0) + 1);
    }

    // Находим максимальное количество студентов в одной группе
    return Math.max(...groupCount.values(), 0);
}

// Примеры использования
const students = [
    new Student("Алексей", "A1"),
    new Student("Мария", "B2"),
    new Student("Иван", "A1"),
    new Student("Ольга", "C3"),
    new Student("Петр", "B2"),
    new Student("Елена", "B2"),
];

console.log(countLargestGroup(students)); // 3 (группа B2 самая большая)