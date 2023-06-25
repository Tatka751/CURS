let SUM = 0;
let N = 0;
do {
    N = prompt('Введіть число, від якого будемо складати ');
    N = Number(N);
    } while (isNaN(N) || Number.isInteger(N) ===false);
let nWrite = N;
let M = 0;
do {
    M = prompt('Введіть число, до якого будемо складати ');
    M = Number(M);
    } while (isNaN(M) || Number.isInteger(M) === false  || M <= N);

let C = confirm('Чи потрібно пропускати парні числа?');
    for (N; N <= M; N++){
        if (C === false){
            SUM = SUM + N;
            }
             else{
                 if (N % 2 > 0){
                     SUM = SUM + N;
                 }
                
             }
         }
document.writeln(`Число, від якого складали :        ${nWrite} <br>`);
document.writeln(`Число, по яке складали :           ${M} <br>`);
document.writeln(`Чи були пропущені парні числа :    ${C} <br>`);
document.writeln(`Число, отрмиане після складання :  ${SUM} <br>`);



