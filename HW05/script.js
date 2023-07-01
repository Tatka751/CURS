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
let badWords = ['fuck', 'shit'];
let questoin = confirm ('Бажаєте поповнити словкник нецензурних сслів (наразі наявні (fuck, shit)')
    if (questoin === true){
        const inputBadWord = prompt ('Введіть нецензурне слово');
        badWords.push(inputBadWord.toLowerCase());
    }
let phrase = prompt ('Введіть фразу з ненормативною лексикою (англійською), яка буде замінена на ***');


function replaceBadWords(badW, input, check){
    /*let questoin = confirm ('Бажаєте поповнити словкник нецензурних сслів (наразі наявні (fuck, shit)')
    if (questoin === true){
        const inputBadWord = prompt ('Введіть нецензурне слово');
        check.push(inputBadWord.toLowerCase());
    }*/
    let arrayTo = input.trim();
    let args = arrayTo.split(' ');
    let result = [];
    let forReplace = args.join();
    let forTranslate = forReplace.toLowerCase();

    for (let i=0; i<check.length; i++) {
       let badWord = String(check[i]);
       let a = forTranslate.replaceAll(badWord,"***");
       forTranslate = a;
      }
    
    result = forTranslate.split(",");
    return result;
}

let withoutBadWords = replaceBadWords (questoin, phrase, badWords );


/*9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні
склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди
видаляються. Рядок приводится до нижнього регістру.
Приклад: divideByThree("Commander) -> ["com", "man", "der"]
Приклад: divideByThree("live") -> ["liv", "e"] */


let userInputPhrase = prompt('Введіть фразу для розбиття кожного слова на умовні склади по три літери')

function divideByThree (inputPhrase){
    let result = [];
    let element = [];
    //arWords = inputPhrase.replace(' ','')
    //alert(arWords)
    let forDivide = inputPhrase.trim().split(" ");  
    for (i=0; i<forDivide.length; i++) {
        let current = forDivide[i];
        element = [];
        for (let j = 0; j < current.length; j = j + 3){
            
            let sklad = current[j];  
            
            if ((current[j+1])!=undefined){
                sklad = sklad + current[j+1];

             }
                if ((current[j+2])!=undefined){
                 sklad = sklad + current[j+2];
                 
            } 
            
            let el1 = sklad;
            element.push(el1);
            
        }
        let el2 = element;
        result.push(el2);

        

    }
    return JSON.stringify(result);

}


let dividingThree= divideByThree (userInputPhrase);





document.writeln(`1. Масив випадкових цілих чисел:  ${randomArray} <br>`);
document.writeln(`3. Cереднє арифметичне всіх переданих в неї аргументів:  ${averange} <br>`);
document.writeln(`5. Результат фільтрації парних числел:  ${withoutEvenNumbers} <br>`);
document.writeln(`7. Результат переверки діленні націло на 5:  ${divideByFive} <br>`);
document.writeln(`8. Результат введеної фрази без нецензурних слів:  ${withoutBadWords} <br>`);
document.writeln(`9. Результат розділення на умовні склади по 3 букви:  ${dividingThree} <br>`);


console.log(`1. Масив випадкових цілих чисел: `, randomArray);
console.log(`3. Cереднє арифметичне всіх переданих в неї аргументів: `, averange);
console.log(`5. Результат фільтрації парних числел: `, withoutEvenNumbers);
console.log(`7. Результат переверки діленні націло на 5: `, divideByFive);
console.log(`8. Результат введеної фрази без нецензурних слів:`, withoutBadWords);
console.log(`9. Результат розділення на умовні склади по 3 букви: `, dividingThree);
