/*1.Створіть функцію getRandomArray(length, min, max) – яка
повертає масив випадкових цілих чисел. У функції є параметри: length -
довжина масиву, min – мінімальне значення цілого числа, max – максимальне
значення цілого числа.
Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3,
2]*/

const valueLength = Number(prompt('Функція 1. Вкажіть довжину для масиву'));
const valueMin = Number(prompt('Функція 1. Вкажіть мінімальне значення цілого числа'));
const valueMax = Number(prompt('Функція 1. Вкажіть максимальне значення цілого числа'));

function getRandomArray (length, min, max) {
    
    let randomArray = [];
    if ((isNaN(length) === false && Number.isInteger(length) === true && length > 0) &&
        (isNaN(min )=== false && Number.isInteger(min) === true) &&
        (isNaN(max) === false && Number.isInteger(max) === true && max > min)) {
            for (let i=1; i<=length; i++){
                element = Math.floor(Math.random() * (max - min + 1)) + min;
                randomArray.push(element);

           }
        }
    alert(randomArray);
    return randomArray;
}

const randomArray = getRandomArray (valueLength, valueMin, valueMax);


/*
3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне
всіх переданих в неї аргументів. НЕ ЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4
*/

function getAverage(numbers) {
    let sum = 0;
    let k = 0;
    let averange = 0;
    numbers.forEach(element => {
        if (Number.isInteger(element) && isNaN(element) === false){
            sum = sum + element;
            k = k + 1;

        }
        averange = sum / k;
    });




    return averange;
}

const averange = getAverage(randomArray);


/*5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа
передані як аргументи функції.
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]*/

function filterEvenNumbers(args) {
    const result = args.filter(arg => (arg % 2) > 0 );
    return result;
}

let withoutEvenNumbers = filterEvenNumbers(randomArray);


/*7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи
в масиві та залишить тільки ті, які діляться на ціло на 5
Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */

function getDividedByFive(args) {
    const result = args.filter(arg => (arg % 5) === 0 );
    return result;
}

let divideByFive = getDividedByFive(randomArray);


/* 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2)
замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно
розбити масив на слова за допомогою функції .split(" "), після чого масив
необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте
можливість розширювати cписок цих слів у майбутньому.
Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing
kidding?"
Приклад: replaceBadWords("Holy shit!") -> "Holy ***!"
Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"
 */
let phrase = prompt ('Введіть фразу з ненормативною лексикою (англійською), яка буде замінена на ***');
let badWords = ['fuck', 'shit'];

function replaceBadWords(input, check){
    let questoin = confirm ('Бажаєте поповнити словкник нецензурних сслів (наразі наявні (fuck, shit)')
    if (questoin === true){
        const inputBadWord = prompt ('Введіть нецензурне слово');
        check.push(inputBadWord.toLowerCase());
    }
    let arrayTo = input.trim();
    let args = arrayTo.split(' ');
    let result = [];
    let forReplace = args.join();

    for (let i=0; i<check.length; i++) {
       let badWord = String(check[i]);
       let a = forReplace.replace(badWord,"***");
       forReplace = a;
      
    }
    
    result = forReplace.split(",");
    return result;
}

let withoutBadWords = replaceBadWords (phrase,badWords );


/*9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні
склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
видаляються. Рядок приводится до нижнього регістру.
Приклад: divideByThree("Commander) -> ["com", "man", "der"]
Приклад: divideByThree("live") -> ["liv", "e"] */
let userInputPhrase = prompt('Яке слово будемо розбивати на умовні склади по 3 букви?')

function divideByThree (inputPhrase){
    let result = [];
    inputPhrase.replace(' ','')
    let forDivide = inputPhrase.split("");
    
    for (i=0; i<forDivide.length; i = i + 3) {
        let current = forDivide[i];
        if ((forDivide[i+1])!=undefined){
            current = current + forDivide[i+1];
        }
        if ((forDivide[i+2])!=undefined){
            current = current + forDivide[i+2];
        }

        let l = current;
        result.push(l);

    }
    return result; 

}


let dividingThree= divideByThree (userInputPhrase);




document.writeln(`1. Масив випадкових цілих чисел:  ${randomArray} <br>`);
document.writeln(`3. Cереднє арифметичне всіх переданих в неї аргументів:  ${averange} <br>`);
document.writeln(`5. Результат фільтрації парних числел:  ${withoutEvenNumbers} <br>`);
document.writeln(`7. Результат переверки діленні націло на 5:  ${divideByFive} <br>`);
document.writeln(`8. Результат введеноъ фрази без поганих слів:  ${withoutBadWords} <br>`);
document.writeln(`9. Результат розділення слова на умовні склади по 3 букви:  ${dividingThree} <br>`);


console.log(`1. Масив випадкових цілих чисел: `, randomArray);
console.log(`3. Cереднє арифметичне всіх переданих в неї аргументів: `, averange);
console.log(`5. Результат фільтрації парних числел: `, withoutEvenNumbers);
console.log(`7. Результат переверки діленні націло на 5: `, divideByFive);
console.log(`8. Результат введеноъ фрази без поганих слів:`, withoutBadWords);
console.log(`9. Результат розділення слова на умовні склади по 3 букви: `, dividingThree);
