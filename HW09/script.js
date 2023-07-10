/**
 * Зробіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у
випадковий колір.
Квадрати мають розташовуватись по 5 в ряд.
Щоб квадрати з'явились на сторінці, необхідно викликати функцію
generateBlocks();

Зробіть так, щоб квадрати змінювали колір раз на секунду.
Щоб квадрати з'явились на сторінці та почали змінюватись,
необхідно викликати функцію generateBlocksInterval();
 */


function randomColor(){

  let arrColor = [];
  let numColor = '';

  for (let i = 1; i <= 3; i++){
    let el =  Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    arrColor.push(el);
  }
  numColor = `rgb(${arrColor[0]},${arrColor[1]},${arrColor[2]})`;
  return numColor;
}

function generateBlocks(){
      const canvas = document.getElementById("main");

      if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        const side = 50;

        for (i = 0; i < 250; i= i + 50 ){
          for (j = 0; j < 250; j= j + 50 ){
            ctx.fillStyle = randomColor();
            ctx.fillRect(i, j, side, side);
          }
        }
      }
 }

 function generateBlocksInterval() {
    setInterval(() => generateBlocks(), 1000); 
 }
 generateBlocksInterval();


 
        