/*
Створіть функцію, яка повертає проміс getRandomChinese(length).
Функція працює таким чином:
Запускається цикл (підказка: можна використовувати while) length
раз, кожен прохід циклу дивимось на останні 5 цифр результату
виклику методу Date.now()
Наприклад отримали const sign = 16086;.
Конвертуємо отриману цифу в рядок String.fromCharCode(sign);
та чекаємо 50 ms

Функція gerRandomChinese(length) повинна повернути рядок
довжиною (length) з китайськими ієрогліфами.
Час роботи проміса має складати length * 50ms.
(Якщо викликати getRandomChinese(4), отримаємо результат "촛궻
簽紙" за 200ms
*/

function getSymbol () {
  let timeValue = Date.now();
  let signEl = timeValue.toString()
  let sign = signEl.substring(signEl.length - 5);
  resultElement = String.fromCharCode(sign); 
  return(resultElement);
}

async function getRandomChinese(length) {
  try{
  let i = 0;
  let res = '';
  let el = '';

  while (i < length) {
    const promise = new Promise ((resolve) => {
      setTimeout(() => {
      el = getSymbol();
      resolve (el);
      i++;
        }, 50)
      });
      res = res + await promise;
    }  
    const span = document.getElementById("randomSymbol");
    span.textContent = res;
    console.log(res);
  } catch {
    console.log(`This is an error`)
  } finally {
    console.log(`${length} chinese characters`);
  }
} 

getRandomChinese(10);

                       