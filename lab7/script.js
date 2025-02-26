class Student {
    constructor(name, grades) {
        this.name = name;
        this.grades = grades;
    }

    // Метод для вычисления средней оценки студента
    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    }
}

// Функция сортировки Шелла
function shellSortStudents(students) {
    let n = students.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = students[i];
            let j = i;

            while (j >= gap && students[j - gap].getAverageGrade() < temp.getAverageGrade()) {
                students[j] = students[j - gap];
                j -= gap;
            }

            students[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return students;
}

// Примеры использования
const students = [
    new Student("Алексей", [4, 5, 3]),
    new Student("Мария", [5, 5, 5]),
    new Student("Иван", [3, 3, 4]),
    new Student("Ольга", [4, 4, 4]),
    new Student("Петр", [5, 3, 4])
];

console.log("До сортировки:");
students.forEach(student => console.log(`${student.name}: ${student.getAverageGrade().toFixed(2)}`));

shellSortStudents(students);

console.log("\nПосле сортировки:");
students.forEach(student => console.log(`${student.name}: ${student.getAverageGrade().toFixed(2)}`));