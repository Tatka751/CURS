//1. Найбільша цифра в числі
function maxNum (enteredNumber = prompt (`Функція 1. Введіть число `) )
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
            if (maxNumber < enteredNumber.charAt(i))
            maxNumber = enteredNumber.charAt(i);

        }
        //document.writeln(`1.   ${enteredNumber}  це  ${maxNumber}`);
        return `${enteredNumber} це ${maxNumber}`;
    }
  
}

// 3. Функція, яка форматує ім'я, роблячи першу букву великою
function correctName (name = prompt (`Функція 3. Введіть ім'я `))
{
    if (name!=''){
     const formattedName = name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase();  
    return formattedName;
    } else return `Ви не ввели ім'я`;
}

//5. Функція, яка повертає випадкове ціле число в діапазоні від N до M 
function randomNumber (N = prompt (`Функція 5. Введіть початок діапазону`), M = prompt (`Функція 5. Введіть кінець діапазону`))
{
    N = Number(N);
    M = Number(M);
    if (Number.isInteger(N) && Number.isInteger(M)) {
        return Math.floor(Math.random() * (M - N + 1)) + N;
    } else  return `Введене значення не є числом!`;
   
}

//7. Функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку
function exchange (currency = prompt (`Функція 7. Вкажіть суму зі знаком валюти в кінці`))
{ 
   if (currency.length > 0) {
   let currExchange = 0;
    if (currency[currency.length-1] === '$'){
        
        currExchange = Number(currency.slice(0,length-1)) * 37;
        return ` ${currExchange} UAH`; 
    } 
   else if (currency.slice(currency.length-3) === 'UAH'){
        currExchange = Number(currency.slice(0,length-3)) / 37;
        return ` ${currExchange} $`;
    }
    } else return `Ви не ввели дані!`;
}

//9. Функція, яка кенерації випадкового паролю (тільки числа),
//довжина встановлюється користувачем або по замовчуванню = 8
//символам.
function randomPass (passLength = prompt (`Функція 9. Зі скількох сиволів генерувати пароль?`, 8))
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
function isPolyndrom (enteredWord = prompt (`Функція 11. Яке слово перевірити?`))
{ 
    let check = '';
    if (enteredWord!=''){
    enteredWord = enteredWord.toLowerCase();
    for (i = enteredWord.length-1; i >= 0; i--) {
        check = check + enteredWord[i];
     }
    result = (enteredWord === check ? true :false);
    return result;
    } else return `Ви не ввели слово`;
}


document.writeln(`Функція 1.  Найбільша цифра в числі: ${maxNum()} <br>`);
document.writeln(`Функція 3.  Форматоване ім'я : ${correctName()}<br>`);
document.writeln(`Функція 5.  Випадкове число в заданому користувачем діапазоні : ${randomNumber()}<br>`);
document.writeln(`Функція 7.  Результат конвертації валют : ${exchange()}<br>`);
document.writeln(`Функція 9.  Згенерований пароль: ${randomPass()}<br>`);
document.writeln(`Функція 11. Введене слово поліндром?: ${isPolyndrom()}<br>`);
