//Задание 1

// const student = {
//     lastName: "Иванов",
//     firstName: "Иван",
//     marks: [
//         { subject: "Математика", mark: 5 },
//         { subject: "Физика", mark: 4 },
//         { subject: "История", mark: 3 }
//     ]
// };

// // Функция для вывода информации о студенте в консоль
// function printStudentInfo(student) {
//     console.log("Фамилия: ", student['lastName']);
//     console.log("Имя: ", student['firstName']);
//     console.log("Оценки:");
//     student.marks.forEach((usp) => {
//         console.log(` ${usp.subject}: ${usp.mark}`);
//     });
// }

// printStudentInfo(student);

//Задание 2 - 3 


// Класс Mark (Оценка)
class Mark {
    constructor(subject, mark) {
        this.subject = subject;
        this.mark = mark;
    }
}

// Класс Student (Студент)
class Student {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.marks = [];
    }

    // Метод для добавления оценки
    addMark(subject, mark) {
        this.marks.push(new Mark(subject, mark));
    }

    // Метод для вычисления средней оценки
    getAverageMark() {
        if (this.marks.length === 0) return 0;
        const total = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
        return total / this.marks.length;
    }

    // Метод для получения всех оценок по указанному предмету
    getMarksBySubject(subject) {
        return this.marks
            .filter(mark => mark.subject === subject)
            .map(mark => mark.mark);
    }

    // Метод для удаления всех оценок по указанному предмету
    removeMarksBySubject(subject) {
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }

    // Метод для вывода информации о студенте
    printInfo() {
        console.log(`Фамилия: ${this.lastName}`);
        console.log(`Имя: ${this.firstName}`);
        console.log("Оценки:");
        this.marks.forEach(mark => {
            console.log(`  ${mark.subject}: ${mark.mark}`);
        });
        console.log(`Средняя оценка: ${this.getAverageMark().toFixed(2)}`);
    }
}

// Создание объекта студента
const student = new Student("Иванов", "Иван");

// Добавление оценок
student.addMark("Математика", 5);
student.addMark("Математика", 4);
student.addMark("Физика", 4);
student.addMark("История", 3);
student.addMark("Математика", 3);

// Вывод информации в консоль
console.log("До удаления оценок:");
student.printInfo();

// Удаление всех оценок по предмету "Математика"
student.removeMarksBySubject("Математика");

// Вывод информации после удаления
console.log("\nПосле удаления оценок по Математике:");
student.printInfo();