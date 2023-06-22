
//1. Найбільша цифра в числі
const num = prompt (`Функція 1. Введіть число `);
function maxNum (enteredNumber)
{
    enteredNumber = Number(enteredNumber);
    if (isNaN(enteredNumber)) {
            return `Введене значення не є числом!`;
        }   
    else {
        enteredNumber = String(enteredNumber)    
        let maxNumber = 0;
        for (let i = 0; i < enteredNumber.length; i++)
        {
            if (maxNumber < enteredNumber.charAt(i)){
            maxNumber = enteredNumber.charAt(i);
            }
        }
        //document.writeln(`1.   ${enteredNumber}  це  ${maxNumber}`);
        return `${enteredNumber} це ${maxNumber}`;
    }
  
}


// 3. Функція, яка форматує ім'я, роблячи першу букву великою
const enteredName = prompt (`Функція 3. Введіть ім'я `);
function correctName (name)
{
    if (name!=''){
     const formattedName = name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();  
    return formattedName;
    } else {
        return `Ви не ввели ім'я`;
    }
}

//5. Функція, яка повертає випадкове ціле число в діапазоні від N до M 
const enteredN = prompt (`Функція 5. Введіть початок діапазону`);
const enteredM = prompt (`Функція 5. Введіть кінець діапазону`);
function randomNumber (N , M )
{
    N = Number(N);
    M = Number(M);
    if (Number.isInteger(N) && Number.isInteger(M)) {
        return Math.floor(Math.random() * (M - N + 1)) + N;
    } else  {
        return `Введене значення не є числом!`;
    }
   
}

//7. Функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку
const enteredCurrency = prompt (`Функція 7. Вкажіть суму зі знаком валюти в кінці`);
function exchange (currency)
{ 
   if (currency.length > 0) {
   let currExchange = 0;
    if (currency[currency.length-1] === '$'){
        
        currExchange = Number(currency.slice(0,length-1)) * 37;
        return ` ${currExchange} UAH`; 
    } 
   else if (currency.slice(currency.length-3).toUpperCase() === 'UAH'){
        currExchange = Number(currency.slice(0,length-3)) / 37;
        return ` ${currExchange} $`;
    }
    } else {
       return `Ви не ввели дані!`;
   }
}

//9. Функція, яка кенерації випадкового паролю (тільки числа),
//довжина встановлюється користувачем або по замовчуванню = 8
//символам.
const enteredLength = prompt (`Функція 9. Зі скількох сиволів генерувати пароль?`, 8);
function randomPass (passLength)
{ 
    passLength = Number(passLength)
    if (Number.isInteger(passLength)){
        pass = '';
        for (i = 1; i <= passLength; i++)
        {
            member = Math.trunc(Math.random() * 10);
            pass = pass+member;

        }
    } 
    return pass;
}


//11. Функція, яка перевіряє, чи є слово паліндромом
const userWord = prompt (`Функція 11. Яке слово перевірити?`);
function isPolyndrom (enteredWord )
{ 
    let check = '';
    if (enteredWord!=''){
    enteredWord = enteredWord.toLowerCase();
    for (i = enteredWord.length-1; i >= 0; i--) {
        check = check + enteredWord[i];
     }
    result = (enteredWord === check ? true :false);
    return result;
    } else {
        return `Ви не ввели слово`;
    }
}


document.writeln(`Функція 1.  Найбільша цифра в числі: ${maxNum(num)} <br>`);
document.writeln(`Функція 3.  Форматоване ім'я : ${correctName(enteredName)}<br>`);
document.writeln(`Функція 5.  Випадкове число в заданому користувачем діапазоні : ${randomNumber(enteredN,enteredM)}<br>`);
document.writeln(`Функція 7.  Результат конвертації валют : ${exchange(enteredCurrency)}<br>`);
document.writeln(`Функція 9.  Згенерований пароль: ${randomPass(enteredLength)}<br>`);
document.writeln(`Функція 11. Введене слово поліндром?: ${isPolyndrom(userWord)}<br>`);
