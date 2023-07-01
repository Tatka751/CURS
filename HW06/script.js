const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];

    /*Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data
science"] - яка повертає список предметів для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ –
замінити на пробіл*/
let nameOfStudent = prompt('Для якого студента необхідно переглянути список предметів (Tanya, Victor, Anton )')
 
function getSubjects(studentName, allstudents) {
    let result = [];
    studentName = studentName.substring(0,1).toUpperCase()+studentName.substring(1).toLowerCase();
    let nameStudent = allstudents.find(item => item.name === studentName);
    let {subjects} = nameStudent;
    Object.entries(subjects).forEach((item) => {
        let element = item[0].substring(0,1).toUpperCase()+item[0].substring(1).toLowerCase();
        element = element.replaceAll("_", " ");
        result.push(element);
    });
    return `Список предметів для студента з іменем ${studentName} такий: ${result}`;
    
}

let subjects = getSubjects(nameOfStudent, students);

/* 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне
середню оцінку по усім предметам для переданого студента НЕ МАСИВА
СТУДЕНТІВ.
Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у
попередніх домашніх завданнях :)
*/

function getAverageMark (studentName, allstudents) {
    let result = [];
    let nameStudent = allstudents.find(item => item.name === studentName);
    let {subjects} = nameStudent;
    Object.entries(subjects).forEach((item) => {
        let element = item[1];
        result.push(element);
    });
    let sum = 0;
    let k = 0;
    let averangeMark = 0;
    result = result.join();
    result = result.split(',');
    result.forEach(item => {
       {
            item = Number(item);
            sum = sum + item;
            k = k + 1;

        }
        averangeMark = Math.round(sum / k * 100) / 100;
    })
    return averangeMark;



}

let avgMark = getAverageMark(nameOfStudent,students);

/*3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name":
"Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по
переданому студенту (вам знадобиться функція з попереднього завдання).
Повинна бути виведена інформація: курс, ім'я, середня оцінка.

*/

function getStudentInfo(studentName,allstudents){
    let avgMark = getAverageMark(nameOfStudent,students);
    let nameStudent = allstudents.find((item) => item.name === studentName);
    let {course} = nameStudent;
    const totalInfo = {};
    totalInfo.course = course; 
    totalInfo.name = studentName;
    totalInfo.averageMark = avgMark;
    return `Інформація загального виду по цьому студенту: <br>
            Курс: ${totalInfo.course} <br>
            Ім'я студента: ${totalInfo.name} <br>
            Середня оцінка: ${totalInfo.averageMark} <br>`






}

let totalStudentInfo = getStudentInfo(nameOfStudent, students);

/*4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
– яка повертає імена студентів у алфавітному порядку.

*/

function getStudentsNames(allstudents){
    let result = allstudents.map((item) => item.name)
    result.sort();
    return result;


}

let stunentsNames = getStudentsNames(students);
/* 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
кращого студента зі списку по показнику середньої оцінки.
*/
function getBestStudent(allstudents){
    let listOfStudents = getStudentsNames(allstudents);
    function createObj (item, avgMark){
        return {
            name: item,
            mark: avgMark
        }

    }
    const markAllStudents = {};
    let result = [];
    listOfStudents.forEach(item => {
        let avgMark = getAverageMark(item,students);
        let element = createObj(item,avgMark);
        result.push(element);
    })
    
    let maxValue = 0;
    let studs = '';
    const d = {};
    let sudentResult = result.find( (item) => {
        if (Number(item.mark) > Number(maxValue)){
            maxValue = item.mark;
            studs = item.name;
        }
       // return item;     
      });
    return `Кращий студент зі списку по показнику середньої оцінки: ${studs}  ${maxValue} `;
}

let bestStudents = getBestStudent(students);

/*6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх
повторень.
 */

let userWord = prompt('Введіть слово для підрахунку кількості однакових букв у слові');

function calculateWordLetters(word){
    const arLetter = word.toLowerCase().split('');
    let result = [];

    function createObj (item, index){
        return {
            letter: item,
            count: index
        }

    }
    let k = 1;
    for (let i = 0; i < arLetter.length; i++){
        let currenLetter = result.find(item => item.letter === arLetter[i]);
    if (currenLetter){
       result.map( item => {
        if (item.letter === currenLetter.letter)
        item.count = item.count + 1;
        });
    } else{
        let newElement = createObj(arLetter[i],1);
        result.push(newElement);
    }
    }
    return JSON.stringify(result);
    
}

let countUserWord = calculateWordLetters(userWord);



document.writeln(`1.  ${subjects} <br>`);
document.writeln(`2. Середня оцінка по всім предметам студента: ${avgMark} <br>`);
document.writeln(`3.  ${totalStudentInfo} <br>`);
document.writeln(`4. Імена всіх студентів (по алфавіту): ${stunentsNames} <br>`);
document.writeln(`5. ${bestStudents} <br>`);
document.writeln(`6. ${countUserWord} <br>`);








console.log(`1. `, subjects);
console.log(`2. Середня оцінка по всім предметам студента: `, avgMark);
console.log(`3. Інформація загального виду по цьому студенту: `, totalStudentInfo);
console.log(`4. Імена всіх студентів (по алфавіту): `, stunentsNames);
console.log(`5. `, bestStudents);
console.log(`6. `, countUserWord);