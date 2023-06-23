const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//1. Розділіть студентів на пари(хлопець + дівчина) 
 
function girls (pile) {
    const girls = [];
    let k = 0; 
    for (let i = 0; i < pile.length; i++) {
            if (pile[i].slice(-1).toLowerCase() === 'а' || pile[i].slice(-1).toLowerCase() === 'я')  {
                girls.push(pile[i]);                
            } 
    }
    return girls;
}
const studentGirls = girls (students);

function boys (pile1) {
    const boys = [];
    let k = 0; 
    for (let i = 0; i < pile1.length; i++) {
            if (pile1[i].slice(-1).toLowerCase() != 'а' && pile1[i].slice(-1).toLowerCase() != 'я')  {
                boys.push(pile1[i]);                
            } 
    }
    return boys;
}
const studentBoys = boys (students);

function pairs(arr1, arr2) {
    const arr3 = []; 
    for (let i = 0; i < arr1.length; i++ ) {
        const element = [arr1[i], arr2[i]];
        arr3.push(element);
    }
    return arr3;
}

const pairsOfStudent = pairs(studentBoys, studentGirls);

//2. Зіставте пари з попереднього завдання та теми проєктів, над
//якими студенти будуть працювати.

function getThemes (arr1, arr2){
    for (let j = 0; j < arr1.length; j++ ) {
        var re = /,/g;
        const str = String(arr1[j]);
        const strNewSeparator = str.replace(re, ' i ');
        arr1[j] = strNewSeparator;
    }
    
    const arr3 = []; 
    for (let i = 0; i < arr1.length; i++ ) {
        const element = [arr1[i], arr2[i]];
        arr3.push(element);
    }
    return arr3;
}

const getPairsThemes = getThemes (pairsOfStudent, themes);

//3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...],
// [...]]

function  getMarks (arr1, arr2){
    const arr3 = [];
    for (let i = 0; i < arr1.length; i++ ) {
        const element = [arr1[i], arr2[i]];
        arr3.push(element);
    }
    return arr3;
}
 
const studentsMarks = getMarks (students, marks);

//4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
//тут функція буде не чистою, але не повинна мутувати массив):
//[["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function randomRating (arr1){
    const arr3 = [];
    for (let i = 0; i < arr1.length; i++ ) {
        const rating = Math.floor(Math.random() * 5) + 1;
        const element = [arr1[i], rating];
        arr3.push(element);
    }
    return arr3;
}
 const pairsRating = randomRating (getPairsThemes );

document.writeln(`1. Розділення студентів на пари(хлопець + дівчина):            ${pairsOfStudent} <br>`);
document.writeln(`2. Зіставлення пари з попереднього завдання та теми проєктів:  ${getPairsThemes} <br>`);
document.writeln(`3. Зіставлення оцінок(marks) зі студентами(students):          ${studentsMarks} <br>`);
document.writeln(`4. Випадкова оцінка за проєкт кожній парі від 1 до 5-ти балів: ${pairsRating} <br>`);
