/**
 *Завдання 1:
Створіть нескінченний генератор ідентифікаторів.
Повинен працювати наступним чином:
const idGenerator = createIdGenerator();
idGenerator.next().value -> 1
idGenerator.next().value -> 2
idGenerator.next().value -> 3
...
Завдання 2 (advanced)
Створіть генератор, який буде регулювати розміри шрифту для
вашого сайту.
(Можна допрацювати, щоб реально змінював шрифт, але це не є
обов'язковою умовою)
Працювати генератор буде наступним чином:
const fontGenerator = newFontGenerator(14); // 14 – стартове
значення
fontGenerator.next("up").value -> 14
fontGenerator.next("up").value -> 16
fontGenerator.next("up").value -> 18
fontGenerator.next().value -> 18
fontGenerator.next("down").value -> 16
fontGenerator.next("down").value -> 14
fontGenerator.next("down").value -> 12
fontGenerator.next().value -> 12
 */

function* createIdGenerator(){
  var i = 1;

  while  (i > 0) 
    yield i++;

  
}

const idGenerator = createIdGenerator();

setInterval(()=>{console.log(`Нескінченний генератор ідентифікаторів  ${idGenerator.next().value}`)},1000);
document.writeln(`Генератор ідентифікаторів в консолі`);

function* newFontGenerator(upOrDown){

  while (1 > 0) {
      let size = yield upOrDown;
 
     if (size === "up" && upOrDown >= 0){
        upOrDown = upOrDown + 2;
        } else if (size === "down" && upOrDown >= 0){
          upOrDown = upOrDown - 2;
          }  
    }
  }
 
const fontGenerator = newFontGenerator(14);
let reSize = document.getElementById("title");

setTimeout(() => { reSize.style.fontSize = `${fontGenerator.next("up").value}px`}, 2000);
setTimeout(() => { reSize.style.fontSize = `${fontGenerator.next("up").value}px`}, 2000);
setTimeout(() => { reSize.style.fontSize = `${fontGenerator.next("up").value}px`}, 2000);
setTimeout(() => { reSize.style.fontSize = `${fontGenerator.next("up").value}px`}, 2000);
setTimeout(() => { reSize.style.fontSize = `${fontGenerator.next("up").value}px`}, 2000);
setTimeout(() => { reSize.style.fontSize = `${fontGenerator.next("up").value}px`}, 2000);
setTimeout(() => { reSize.style.fontSize = `${fontGenerator.next("up").value}px`}, 2000);